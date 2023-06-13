-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Last_Name" TEXT,
    "First_Name" TEXT,
    "Middle_Name1" TEXT,
    "Middle_Name2" TEXT,
    "Middle_Name3" TEXT,
    "Gender_Code" INTEGER,
    "IncomeTaxPan" TEXT NOT NULL,
    "PAN_Issue_Date" TEXT,
    "PAN_Expiration_Date" TEXT,
    "Passport_number" TEXT,
    "Passport_Issue_Date" TEXT,
    "Passport_Expiration_Date" TEXT,
    "Voter_s_Identity_Card" TEXT,
    "Voter_ID_Issue_Date" TEXT,
    "Voter_ID_Expiration_Date" TEXT,
    "Driver_License_Number" TEXT,
    "Driver_License_Issue_Date" TEXT,
    "Driver_License_Expiration_Date" TEXT,
    "Ration_Card_Number" TEXT,
    "Ration_Card_Issue_Date" TEXT,
    "Ration_Card_Expiration_Date" TEXT,
    "Universal_ID_Number" TEXT,
    "Universal_ID_Issue_Date" TEXT,
    "Universal_ID_Expiration_Date" TEXT,
    "Date_Of_Birth_Applicant" BIGINT,
    "Telephone_Number_Applicant_1st" TEXT,
    "Telephone_Extension" TEXT,
    "Telephone_Type" TEXT,
    "MobilePhoneNumber" DECIMAL(65,30),
    "EMailId" TEXT,
    "Income" INTEGER,
    "Marital_Status" TEXT,
    "Employment_Status" TEXT,
    "Time_with_Employer" TEXT,
    "Number_of_Major_Credit_Card_Held" TEXT,
    "FlatNoPlotNoHouseNo" TEXT,
    "BldgNoSocietyName" TEXT,
    "RoadNoNameAreaLocality" TEXT,
    "City" TEXT,
    "Landmark" TEXT,
    "State" INTEGER,
    "PINCode" INTEGER,
    "Country_Code" TEXT,
    "scoreId" INTEGER
);

-- CreateTable
CREATE TABLE "Header" (
    "id" SERIAL NOT NULL,
    "CustomerPan" TEXT NOT NULL,
    "SystemCode" INTEGER,
    "MessageText" TEXT,
    "ReportDate" DECIMAL(65,30),
    "ReportTime" DECIMAL(65,30)
);

-- CreateTable
CREATE TABLE "CreditProfileHeader" (
    "id" SERIAL NOT NULL,
    "CustomerPan" TEXT NOT NULL,
    "Enquiry_Username" TEXT,
    "ReportDate" DECIMAL(65,30),
    "ReportTime" DECIMAL(65,30),
    "Version" TEXT,
    "ReportNumber" DECIMAL(65,30),
    "Subscriber" TEXT,
    "Subscriber_Name" TEXT
);

-- CreateTable
CREATE TABLE "Current_Application_Details" (
    "id" SERIAL NOT NULL,
    "ApplicantPan" TEXT NOT NULL,
    "Enquiry_Reason" INTEGER,
    "Finance_Purpose" TEXT,
    "Amount_Financed" INTEGER,
    "Duration_Of_Agreement" INTEGER
);

-- CreateTable
CREATE TABLE "TotalCAPS_Summary" (
    "CustomerPan" TEXT NOT NULL,
    "TotalCAPSLast7Days" INTEGER,
    "TotalCAPSLast30Days" INTEGER,
    "TotalCAPSLast90Days" INTEGER,
    "TotalCAPSLast180Days" INTEGER
);

-- CreateTable
CREATE TABLE "CAIS_Account" (
    "Identification_Number" TEXT NOT NULL,
    "Subscriber_Name" TEXT,
    "Account_Number" TEXT,
    "Portfolio_Type" TEXT,
    "Account_Type" INTEGER,
    "Open_Date" INTEGER,
    "Credit_Limit_Amount" INTEGER,
    "Highest_Credit_or_Original_Loan_Amount" INTEGER,
    "Terms_Duration" TEXT,
    "Terms_Frequency" TEXT,
    "Scheduled_Monthly_Payment_Amount" TEXT,
    "Account_Status" INTEGER,
    "Payment_Rating" INTEGER,
    "Payment_History_Profile" TEXT,
    "Special_Comment" TEXT,
    "Current_Balance" INTEGER,
    "Amount_Past_Due" TEXT,
    "Original_Charge_Off_Amount" TEXT,
    "Date_Reported" INTEGER,
    "Date_of_First_Delinquency" TEXT,
    "Date_Closed" TEXT,
    "Date_of_Last_Payment" INTEGER,
    "SuitFiledWillfulDefaultWrittenOffStatus" TEXT,
    "SuitFiled_WilfulDefault" TEXT,
    "Written_off_Settled_Status" TEXT,
    "Value_of_Credits_Last_Month" TEXT,
    "Occupation_Code" TEXT,
    "Settlement_Amount" TEXT,
    "Value_of_Collateral" TEXT,
    "Type_of_Collateral" TEXT,
    "Written_Off_Amt_Total" TEXT,
    "Written_Off_Amt_Principal" TEXT,
    "Rate_of_Interest" TEXT,
    "Repayment_Tenure" INTEGER,
    "Promotional_Rate_Flag" TEXT NOT NULL,
    "Income" TEXT,
    "Income_Indicator" TEXT,
    "Income_Frequency_Indicator" TEXT,
    "DefaultStatusDate" TEXT,
    "LitigationStatusDate" TEXT,
    "WriteOffStatusDate" TEXT,
    "DateOfAddition" INTEGER,
    "CurrencyCode" TEXT,
    "Subscriber_comments" TEXT,
    "Consumer_comments" TEXT,
    "AccountHoldertypeCode" TEXT
);

-- CreateTable
CREATE TABLE "Credit_Account" (
    "CustomerPan" TEXT NOT NULL,
    "CreditAccountTotal" INTEGER,
    "CreditAccountActive" INTEGER,
    "CreditAccountDefault" INTEGER,
    "CreditAccountClosed" INTEGER,
    "CADSuitFiledCurrentBalance" INTEGER
);

-- CreateTable
CREATE TABLE "Total_Outstanding_Balance" (
    "CustomerPan" TEXT NOT NULL,
    "Outstanding_Balance_Secured" INTEGER,
    "Outstanding_Balance_Secured_Percentage" INTEGER,
    "Outstanding_Balance_UnSecured" INTEGER,
    "Outstanding_Balance_UnSecured_Percentage" INTEGER,
    "Outstanding_Balance_All" INTEGER
);

-- CreateTable
CREATE TABLE "CAIS_Account_History" (
    "Id_Number" TEXT NOT NULL,
    "Year" INTEGER,
    "Month" INTEGER,
    "Days_Past_Due" INTEGER,
    "Asset_Classification" TEXT
);

-- CreateTable
CREATE TABLE "CAPS_Application_Details" (
    "CustomerPan" TEXT NOT NULL,
    "Subscriber_code" TEXT NOT NULL,
    "Subscriber_Name" TEXT,
    "Date_of_Request" INTEGER,
    "ReportTime" INTEGER,
    "ReportNumber" INTEGER,
    "Enquiry_Reason" INTEGER,
    "Finance_Purpose" INTEGER,
    "Amount_Financed" INTEGER,
    "Duration_Of_Agreement" INTEGER
);

-- CreateTable
CREATE TABLE "CAPS_Summary" (
    "CustomerPan" TEXT NOT NULL,
    "CAPSLast7Days" INTEGER,
    "CAPSLast30Days" INTEGER,
    "CAPSLast90Days" INTEGER,
    "CAPSLast180Days" INTEGER
);

-- CreateTable
CREATE TABLE "NonCreditCAPS_Summary" (
    "CustomerPan" TEXT NOT NULL,
    "NonCreditCAPS_SummaryLast7Days" INTEGER,
    "NonCreditCAPS_SummaryLast30Days" INTEGER,
    "NonCreditCAPS_SummaryLast90Days" INTEGER,
    "NonCreditCAPS_SummaryLast180Days" INTEGER
);

-- CreateTable
CREATE TABLE "score" (
    "id" SERIAL NOT NULL,
    "CustomerPan" TEXT NOT NULL,
    "BureauScore" INTEGER,
    "BureauScoreConfidLevel" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_IncomeTaxPan_key" ON "User"("IncomeTaxPan");

-- CreateIndex
CREATE UNIQUE INDEX "User_EMailId_key" ON "User"("EMailId");

-- CreateIndex
CREATE UNIQUE INDEX "Header_id_key" ON "Header"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CreditProfileHeader_id_key" ON "CreditProfileHeader"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CreditProfileHeader_CustomerPan_key" ON "CreditProfileHeader"("CustomerPan");

-- CreateIndex
CREATE UNIQUE INDEX "Current_Application_Details_id_key" ON "Current_Application_Details"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TotalCAPS_Summary_CustomerPan_key" ON "TotalCAPS_Summary"("CustomerPan");

-- CreateIndex
CREATE UNIQUE INDEX "CAIS_Account_Identification_Number_key" ON "CAIS_Account"("Identification_Number");

-- CreateIndex
CREATE UNIQUE INDEX "Credit_Account_CustomerPan_key" ON "Credit_Account"("CustomerPan");

-- CreateIndex
CREATE UNIQUE INDEX "Total_Outstanding_Balance_CustomerPan_key" ON "Total_Outstanding_Balance"("CustomerPan");

-- CreateIndex
CREATE UNIQUE INDEX "CAIS_Account_History_Id_Number_key" ON "CAIS_Account_History"("Id_Number");

-- CreateIndex
CREATE UNIQUE INDEX "CAPS_Application_Details_CustomerPan_key" ON "CAPS_Application_Details"("CustomerPan");

-- CreateIndex
CREATE UNIQUE INDEX "CAPS_Application_Details_Subscriber_code_key" ON "CAPS_Application_Details"("Subscriber_code");

-- CreateIndex
CREATE UNIQUE INDEX "CAPS_Summary_CustomerPan_key" ON "CAPS_Summary"("CustomerPan");

-- CreateIndex
CREATE UNIQUE INDEX "NonCreditCAPS_Summary_CustomerPan_key" ON "NonCreditCAPS_Summary"("CustomerPan");

-- CreateIndex
CREATE UNIQUE INDEX "score_id_key" ON "score"("id");

-- CreateIndex
CREATE UNIQUE INDEX "score_CustomerPan_key" ON "score"("CustomerPan");

-- AddForeignKey
ALTER TABLE "Header" ADD CONSTRAINT "Header_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditProfileHeader" ADD CONSTRAINT "CreditProfileHeader_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Current_Application_Details" ADD CONSTRAINT "Current_Application_Details_ApplicantPan_fkey" FOREIGN KEY ("ApplicantPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotalCAPS_Summary" ADD CONSTRAINT "TotalCAPS_Summary_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit_Account" ADD CONSTRAINT "Credit_Account_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Total_Outstanding_Balance" ADD CONSTRAINT "Total_Outstanding_Balance_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CAIS_Account_History" ADD CONSTRAINT "CAIS_Account_History_Id_Number_fkey" FOREIGN KEY ("Id_Number") REFERENCES "CAIS_Account"("Identification_Number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CAPS_Application_Details" ADD CONSTRAINT "CAPS_Application_Details_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CAPS_Summary" ADD CONSTRAINT "CAPS_Summary_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonCreditCAPS_Summary" ADD CONSTRAINT "NonCreditCAPS_Summary_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "score" ADD CONSTRAINT "score_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;
