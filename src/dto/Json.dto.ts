import { IsString, IsNumber } from "class-validator";

export class JSon {
  Header: object;
  CreditProfileHeader: object;
  UserMessage: object;
  Current_Application: object;
  CAIS_Account: object;
  Match_result: object;
  TotalCAPS_Summary: object;
  CAPS: object;
  NonCreditCAPS: object;
  SCORE: object;
}

export class User {
  @IsNumber()

  id: number;

  @IsString()
  Last_Name: string;

  @IsString()
  First_Name: string;

  @IsString()
  Middle_Name1: string;

  @IsString()
  Middle_Name2: string;

  @IsString()
  Middle_Name3: string;

  @IsNumber()
  Gender_Code: number;

  @IsString()
  IncomeTaxPan: string;

  @IsString()
  PAN_Issue_Date: string;

  @IsString()
  PAN_Expiration_Date: string;

  @IsString()
  Passport_number: string;

  @IsString()
  Passport_Issue_Date: string;

  @IsString()
  Passport_Expiration_Date: string;
  @IsString()
  Voter_s_Identity_Card: string;

  @IsString()
  Voter_ID_Issue_Date: string;

  @IsString()
  Voter_ID_Expiration_Date: string;

  @IsString()
  Driver_License_Number: string;

  @IsString()
  Driver_License_Issue_Date: string;

  @IsString()
  Driver_License_Expiration_Date: string;

  @IsString()
  Ration_Card_Number: string;

  @IsString()
  Ration_Card_Issue_Date: string;

  @IsString()
  Ration_Card_Expiration_Date: string;

  @IsString()
  Universal_ID_Number: string;

  @IsString()
  Universal_ID_Issue_Date: string;

  @IsString()
  Universal_ID_Expiration_Date: string;

  @IsNumber()
  Date_Of_Birth_Applicant: number;

  @IsString()
  Telephone_Number_Applicant_1st: string;

  @IsString()
  Telephone_Extension: string;

  @IsString()
  Telephone_Type: string;

  @IsNumber()
  MobilePhoneNumber: number;

  @IsString()
  EMailId: string;

  @IsNumber()
  Income: number;

  @IsString()
  Marital_Status: string;

  @IsString()
  Employment_Status: string;

  @IsString()
  Time_with_Employer: string;

  @IsString()
  Number_of_Major_Credit_Card_Held: string;

  @IsString()
  FlatNoPlotNoHouseNo: string;

  @IsString()
  BldgNoSocietyName: string;

  @IsString()
  RoadNoNameAreaLocality: string;

  @IsString()
  City: string;

  @IsString()
  Landmark: string;

  @IsNumber()
  State: number;

  @IsNumber()
  PINCode: number;

  @IsString()
  Country_Code: string;

}

export class Headerdto {
  @IsNumber()
  SystemCode: number;

  @IsString()
  MessageText: string;

  @IsString()
  ReportDate: string;

  @IsString()
  ReportTime: string;
}

export class CreditProfHeadDto {
  @IsString()
  Enquiry_Username: string;

  @IsNumber()
  ReportDate: number;

  @IsNumber()
  ReportTime: number;

  @IsString()
  Version: string;

  @IsNumber()
  ReportNumber: number

  @IsString()
  Subscriber: string

  @IsString()
  Subscriber_Name: string
}

export class CurrAppDetail {
  @IsNumber()
  Enquiry_Reason: number

  @IsString()
  Finance_Purpose: string

  @IsNumber()
  Amount_Financed: number

  @IsNumber()
  Duration_Of_Agreement: number

}
export class CAPS_App_DetDto {
  @IsString()
  Subscriber_code :string
  @IsString()
  Subscriber_Name       :string

  @IsNumber()
  Date_of_Request       :number

  @IsNumber()
  ReportTime            :number

  @IsNumber()
  ReportNumber          :number

  @IsNumber()
  Enquiry_Reason        :number

  @IsNumber()
  Finance_Purpose       :number

  @IsNumber()
  Amount_Financed       :number

  @IsNumber()
  Duration_Of_Agreement :number

}
export class CAPS_SummaryDto {
  @IsNumber()
  CAPSLast7Days   :number

  @IsNumber()
  CAPSLast30Days  :number

  @IsNumber()
  CAPSLast90Days  :number

  @IsNumber()
  CAPSLast180Days :number

}



export class Tot_cap_SummaryDto {
  @IsString()
  CustomerPan: string

  @IsNumber()
  TotalCAPSLast7Days: number

  @IsNumber()
  TotalCAPSLast30Days: number

  @IsNumber()
  TotalCAPSLast90Days: number

  @IsNumber()
  TotalCAPSLast180Days: number
}

export class scoreDto {
  @IsString()
  CustomerPan: string

  @IsNumber()
  BureauScore: number

  @IsString()
  BureauScoreConfidLevel: string
}

export class nonCreditSummaryDto {
  @IsString()
  CustomerPan: string;

  @IsNumber()
  NonCreditCAPS_SummaryLast7Days: number;

  @IsNumber()
  NonCreditCAPS_SummaryLast30Days: number;

  @IsNumber()
  NonCreditCAPS_SummaryLast90Days: number;

  @IsNumber()
  NonCreditCAPS_SummaryLast180Days: number;

}

export class Cais_AccDto {

  @IsString()
  Identification_Number: string;

  @IsString()
  Subscriber_Name: string;

  @IsString()
  Account_Number: string;

  @IsString()
  Portfolio_Type: string;

  @IsNumber()
  Account_Type: number;

  @IsNumber()
  Open_Date: number;

  @IsNumber()
  Credit_Limit_Amount: number;

  @IsNumber()
  Highest_Credit_or_Original_Loan_Amount: number;

  @IsString()
  Terms_Duration: string;

  @IsString()
  Terms_Frequency: string;

  @IsString()
  Scheduled_Monthly_Payment_Amount: string;

  @IsNumber()
  Account_Status: number;

  @IsNumber()
  Payment_Rating: number;

  @IsString()
  Payment_History_Profile: string;

  @IsString()
  Special_Comment: string;

  @IsNumber()
  Current_Balance: number;

  @IsString()
  Amount_Past_Due: number;

  @IsString()
  Original_Charge_Off_Amount: string;

  @IsNumber()
  Date_Reported: number;

  @IsString()
  Date_of_First_Delinquency: string;

  @IsString()
  Date_Closed: number;

  @IsNumber()
  Date_of_Last_Payment: number;

  @IsString()
  SuitFiledWillfulDefaultWrittenOffStatus: string;

  @IsString()
  SuitFiled_WilfulDefault: string;

  @IsString()
  Written_off_Settled_Status: string;

  @IsString()
  Value_of_Credits_Last_Month: string;

  @IsString()
  Occupation_Code: string;

  @IsString()
  Settlement_Amount: string;

  @IsString()
  Value_of_Collateral: number;

  @IsString()
  Type_of_Collateral: string;

  @IsString()
  Written_Off_Amt_Total: string;

  @IsString()
  Written_Off_Amt_Principal: string;

  @IsString()
  Rate_of_Interest: string;

  @IsNumber()
  Repayment_Tenure: number;

  @IsString()
  Promotional_Rate_Flag: string;

  @IsString()
  Income: string;

  @IsString()
  Income_Indicator: string;

  @IsString()
  Income_Frequency_Indicator: string;

  @IsString()
  DefaultStatusDate: string;

  @IsString()
  LitigationStatusDate: string;

  @IsString()
  WriteOffStatusDate: string;

  @IsNumber()
  DateOfAddition: number;

  @IsString()
  CurrencyCode: string;

  @IsString()
  Subscriber_comments: string;

  @IsString()
  Consumer_comments: string;

  @IsString()
  AccountHoldertypeCode: number;
}

export class CAIS_Account_HistDto{

  @IsString()
  Acct_Number           :string  
  
  @IsNumber()
  Year                 :number

  @IsNumber()
  Month                :number

  @IsNumber()
  Days_Past_Due        :number

  @IsString()
  Asset_Classification :string

}