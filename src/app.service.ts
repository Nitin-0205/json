import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CAIS_Account_HistDto, CAPS_App_DetDto, CAPS_SummaryDto, Cais_AccDto, CreditProfHeadDto, CurrAppDetail, Headerdto, Tot_cap_SummaryDto, User, nonCreditSummaryDto, scoreDto } from './dto/Json.dto';
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  getdata() {
    return 'Hello World!';
  }
  Client(dto: User) {
    return dto;
  }
  ClientHead(dto: Headerdto) {
    return dto;
  }
  ClientcredProfHead(dto: CreditProfHeadDto) {
    return dto;
  }
  ClientCurrAppDetail(dto: CurrAppDetail) {
    return dto

  }
  nonCreditSummary(dto: nonCreditSummaryDto) {
    return dto;
  }
  scoreDto(dto: scoreDto) {
    return dto;
  }
  CAPS_SummaryDTOFun(dto:CAPS_SummaryDto){
    return dto;
  }
  CAPS_App_DetDtofun(dto:CAPS_App_DetDto){
    return dto;
  }
  TotCapSummaryPayDto(dto: Tot_cap_SummaryDto) {
    return dto;
  }

  caisAccDto(dto: Cais_AccDto, IncomeTaxPan) {

    const val = Object.values(dto)
    const dataArray = val.map((caisAccpayload) => {
      const dat = caisAccpayload
      dat["CustomerPan"] = IncomeTaxPan;
      delete dat["CAIS_Holder_Details"];
      delete dat["CAIS_Holder_Address_Details"];
      delete dat["CAIS_Holder_Phone_Details"];
      delete dat["CAIS_Holder_ID_Details"];

      return dat;
    })

    return dataArray
  }
  // CAIS_Account_HistDtoFun(dto:CAIS_Account_HistDto){
  //   return dto;
  // }

  async addNew(dto: any) {
    const Header = dto?.INProfileResponse?.Header;
    const UserMessage = dto?.INProfileResponse?.UserMessage;
    const CreditProfileHeader = dto?.INProfileResponse?.CreditProfileHeader;
    const Current_Application = dto?.INProfileResponse?.Current_Application;
    const IncomeTaxPan = Current_Application?.Current_Application_Details?.Current_Applicant_Details?.IncomeTaxPan

    const CAIS_Account = dto?.INProfileResponse?.CAIS_Account;
    const Match_result = dto?.INProfileResponse?.Match_result;
    const TotalCAPS_Summary = dto?.INProfileResponse?.TotalCAPS_Summary;
    const CAPS = dto?.INProfileResponse?.CAPS;
    const NonCreditCAPS = dto?.INProfileResponse?.NonCreditCAPS;
    const SCORE = dto?.INProfileResponse?.SCORE;

    const userPayload = this.Client(
      {
        ...Current_Application?.Current_Application_Details?.Current_Applicant_Details,
        ...Current_Application?.Current_Application_Details?.Current_Other_Details,
        ...Current_Application?.Current_Application_Details?.Current_Applicant_Address_Details,
      });


    if (userPayload) {
      const found = await this.prisma.user.findUnique({
        where: {
          IncomeTaxPan: IncomeTaxPan
        }
      })
      if (!found) {
        const pay = userPayload
        await this.prisma.user.create({
          data: userPayload
        });
      }

      const headpayload = { CustomerPan: IncomeTaxPan, ...this.ClientHead(Header) }
      // console.log(headpayload)
      await this.prisma.header.create({
        data: headpayload
      });

      //////////////////////////////////

      const credProfheadpayload = { CustomerPan: IncomeTaxPan, ...this.ClientcredProfHead(CreditProfileHeader) }

      if (credProfheadpayload) {
        const found = await this.prisma.creditProfileHeader.findUnique({
          where: {
            CustomerPan: IncomeTaxPan
          }
        })
        if (!found) {
          await this.prisma.creditProfileHeader.create({
            data: credProfheadpayload
          });
        }
      }


      //////////////////////////////////

      const currAppDetailpay = { ApplicantPan: IncomeTaxPan, ...this.ClientCurrAppDetail(Current_Application?.Current_Application_Details) }
      // console.log(currAppDetailpay)
      await this.prisma.current_Application_Details.create({
        data: {
          ApplicantPan: IncomeTaxPan,
          Enquiry_Reason: currAppDetailpay.Enquiry_Reason,
          Finance_Purpose: currAppDetailpay.Finance_Purpose,
          Amount_Financed: currAppDetailpay.Enquiry_Reason,
          Duration_Of_Agreement: currAppDetailpay.Duration_Of_Agreement
        }

      });

      //////////////////////////////////////

      const caisAccObj = this.caisAccDto(CAIS_Account?.CAIS_Account_DETAILS, IncomeTaxPan)
      // console.log(caisAccObj)
      caisAccObj.map(async (dataval) => {
        console.log(dataval)
        const CaisAccountHist = dataval["CAIS_Account_History"]
        delete dataval["CAIS_Account_History"];
        const fond = await this.prisma.cAIS_Account.findUnique({
          where: {
            Identification_Number: dataval.Identification_Number
          }
        })
        if (!fond) {
          try {
            const saved = await this.prisma.cAIS_Account.create({
              data: dataval
            });

            if (saved) {

              CaisAccountHist.map(async (hist) => {
                hist["Acct_Number"] = dataval.Account_Number;
                console.log(hist)
                await this.prisma.cAIS_Account_History.create({
                  data: hist
                });
              })

            }
          } catch {
            console.log("cais data add failed")
          }
          // console.log(CaisAccountHist)
          console.log("data added")

        } else {
          console.log("Identification Id Already  Exist")
        }

      })

      /////////////////////////////////

      const CAIS_AccountPay = CAIS_Account?.CAIS_Summary?.Credit_Account
      console.log(CAIS_AccountPay)

      const findaccCredit = await this.prisma.credit_Account.findUnique({
        where: {
          CustomerPan: IncomeTaxPan
        }
      })
      if (!findaccCredit) {
        await this.prisma.credit_Account.create({
          data: {
            CustomerPan: IncomeTaxPan,
            CreditAccountTotal: CAIS_AccountPay.CreditAccountTotal,
            CreditAccountActive: CAIS_AccountPay.CreditAccountActive,
            CreditAccountDefault: CAIS_AccountPay.CreditAccountDefault,
            CreditAccountClosed: CAIS_AccountPay.CreditAccountClosed,
          }
        });
        console.log("credit_Account of CAIS added")

      } else {
        console.log("credit_Account of CAIS Exist")

      }


      /////////////////////////

      const CAIS_total_out_balPay = CAIS_Account?.CAIS_Summary?.Total_Outstanding_Balance
      // console.log(CAIS_total_out_balPay)
      const findtotOut = await this.prisma.total_Outstanding_Balance.findUnique({
        where: {
          CustomerPan: IncomeTaxPan
        }
      })
      if (!findtotOut) {
        await this.prisma.total_Outstanding_Balance.create({
          data: {
            CustomerPan: IncomeTaxPan,
            Outstanding_Balance_Secured: CAIS_total_out_balPay.Outstanding_Balance_Secured,
            Outstanding_Balance_Secured_Percentage: CAIS_total_out_balPay.Outstanding_Balance_Secured_Percentage,
            Outstanding_Balance_UnSecured: CAIS_total_out_balPay.Outstanding_Balance_UnSecured,
            Outstanding_Balance_UnSecured_Percentage: CAIS_total_out_balPay.Outstanding_Balance_UnSecured_Percentage,
            Outstanding_Balance_All: CAIS_total_out_balPay.Outstanding_Balance_All,
          }
        });
        console.log("total Outstanding Balance of CAIS added")

      } else {
        console.log("total Outstanding Balance of CAIS Exist")

      }

      ////////////////////////////////////////

      const nonCreditCapPay = { CustomerPan: IncomeTaxPan, ...NonCreditCAPS.NonCreditCAPS_Summary }
      // console.log(nonCreditCapPay)

      const findNonCredCap = await this.prisma.nonCreditCAPS_Summary.findUnique({
        where: {
          CustomerPan: IncomeTaxPan
        }
      })

      if (!findNonCredCap) {
        await this.prisma.nonCreditCAPS_Summary.create({
          data: {
            CustomerPan: nonCreditCapPay.CustomerPan,
            NonCreditCAPS_SummaryLast7Days: nonCreditCapPay.NonCreditCAPSLast7Days,
            NonCreditCAPS_SummaryLast30Days: nonCreditCapPay.NonCreditCAPSLast30Days,
            NonCreditCAPS_SummaryLast90Days: nonCreditCapPay.NonCreditCAPSLast90Days,
            NonCreditCAPS_SummaryLast180Days: nonCreditCapPay.NonCreditCAPSLast180Days,
          }
        });
        console.log("nonCreditCapPay added")

      } else {
        console.log("non Credit Cap Already  Exist")
      }

      /////////////////////////   CAPS  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

      const CAPS_SummaryPay = { CustomerPan: IncomeTaxPan, ...this.CAPS_SummaryDTOFun(CAPS?.CAPS_Summary) }
      const findCAPS_Summary = await this.prisma.cAPS_Summary.findUnique({
        where: {
          CustomerPan: IncomeTaxPan
        }
      })

      if (!findCAPS_Summary) {
        await this.prisma.cAPS_Summary.create({
          data: CAPS_SummaryPay
        });
        console.log("Cap Summary Pay added")

      } else {
        console.log("Cap Summary Pay Already  Exist")
      }
      // const CAPS_AccoutntPay = {...this.CAPS_App_DetDtofun(CAPS?.CAPS_Application_Details) }
      const CAPS_AccoutntObj = CAPS?.CAPS_Application_Details;
      console.log(CAPS_AccoutntObj)
      CAPS_AccoutntObj.map(async(CAPS_AccoutntPay)=>{
        delete CAPS_AccoutntPay["CAPS_Applicant_Details"]
        delete CAPS_AccoutntPay["CAPS_Other_Details"]
        delete CAPS_AccoutntPay["CAPS_Applicant_Address_Details"]
        delete CAPS_AccoutntPay["CAPS_Applicant_Additional_Address_Details"]

        const CAPS_AccoutntPayData ={ CustomerPan: IncomeTaxPan, ...CAPS_AccoutntPay}
        const findCAPS_AccoutntPay = await this.prisma.cAPS_Application_Details.findUnique({
        where: {
          Subscriber_code: CAPS_AccoutntPayData.Subscriber_code
        }
      })

      if (!findCAPS_AccoutntPay) {
        
        await this.prisma.cAPS_Application_Details.create({
          data: CAPS_AccoutntPayData
        });
        console.log("Cap Account  added")

      } else {
        console.log("Cap Account Already  Exist")
      }

      })
      
      


      //////////////////////////////////////////

      const TotCapSummaryPay = { CustomerPan: IncomeTaxPan, ...this.TotCapSummaryPayDto(TotalCAPS_Summary) }
      const findTotCapSumPay = await this.prisma.totalCAPS_Summary.findUnique({
        where: {
          CustomerPan: IncomeTaxPan
        }
      })

      if (!findTotCapSumPay) {
        await this.prisma.totalCAPS_Summary.create({
          data: TotCapSummaryPay
        });
        console.log("Tot Cap Summary Pay added")

      } else {
        console.log("Tot Cap Summary Pay Already  Exist")
      }

      ///////////////////////////////////////////

      const scorePay = { CustomerPan: IncomeTaxPan, ...this.scoreDto(SCORE) }
      // console.log(scorePay)
      const findscore = await this.prisma.score.findUnique({
        where: {
          CustomerPan: IncomeTaxPan
        }
      })

      if (!findscore) {
        await this.prisma.score.create({
          data: scorePay
        });
        console.log("Score added")

      } else {
        console.log("score Already  Exist")
      }

    }

  }
}
