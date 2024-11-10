
import { Card, CardContent } from "@/components/ui/card";
import { committeeMembers } from "@/data/committe";
import ACESLOGO from "@/assets/logo.png";
import TULOGO from "@/assets/tu.png";
import type { content, } from "@/types";
import { replaceNewLines } from "@/lib/new-lines";
// import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import NepaliDate from 'nepali-datetime'
export function A4LetterTemplate({
  refNo = "",
  content = "",
  date = new Date(),
  recipientTitle = "",
  recipientAddress = "",
  subject = "",
  signatureTitle = "",
  signerName = "",
  signerPosition = "",
  signature = ""
}: content) {

  // const options = {
  //   resolution: Resolution.HIGH,
  //   page: {
  //     margin: Margin.SMALL,
  //     format: 'letter',
  //   },
  // }
  // const getTargetElement = () => document.getElementById('content-id');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-[794px] h-[1123px] overflow-hidden shadow-xl" id="content-id">
        <CardContent className="p-0">
          <div className="flex flex-col h-full">
            {/* Header Section */}
            <div className="flex items-center justify-between p-4 border-b-2 border-gray-800">
              <img src={ACESLOGO} alt="ACES Logo" className="h-16 w-16" />
              <div className="text-center flex-1 px-4">
                <h1 className="text-xl font-bold">ASSOCIATION OF COMPUTER</h1>
                <h1 className="text-xl font-bold">ENGINEERING STUDENTS (ACES)</h1>
                <p className="text-sm">IOE, PURWANCHAL CAMPUS, DHARAN-8</p>
                <p className="text-sm">ESTD. : 2070</p>
              </div>
              <img src={TULOGO} alt="Organization Logo" className="h-16 w-16" />
            </div>

            <div className="flex flex-1">
              {/* Sidebar */}
              <div className="w-35 bg-[#87CEEB] p-4 text-xs border-r-2 border-gray-800">
                <div className="font-bold mb-2">Ref No.: {refNo}</div>
                {committeeMembers.map((role, index) => (
                  <div key={index} className="mt-2 justify-center">
                    <div className="font-bold">{role.title}</div>
                    {/* Preserve line breaks in committee member names */}
                    <div className="whitespace-pre-line">
                      {role.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 relative">
                {/* Date */}
                <div className="absolute font-notoSerifDevanagari top-6 right-6">
                  मिति: {new NepaliDate(date).format("YYYY-MM-DD")}
                </div>

                {/* Recipient */}
                <div className="mt-16 font-notoSerifDevanagari  mb-6 whitespace-pre-line">
                  {recipientTitle}
                  <br />
                  {replaceNewLines(recipientAddress)}
                </div>

                {/* Subject */}
                <div className="mb-6 font-notoSerifDevanagari  text-center font-bold">
                  विषय: {subject}
                </div>

                {/* Content */}
                <div className="font-notoSerifDevanagari text-justify  mb-8 whitespace-pre-line leading-relaxed">
                  {content}
                </div>

                {/* Signature */}
                <div className="mt-16 font-notoSerifDevanagari  text-right">
                  <div>{signatureTitle}</div>
                  <div className="mt-8">
                    {signature ? (<img src={signature} alt="Signature" className="ml-auto mb-2 h-16" />) : <span></span>}
                    <div>{signerName}</div>
                    <div>{signerPosition}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full bg-[#87CEEB] p-2 text-center text-xs border-t-2 border-gray-800">
              E-MAIL : aces@ioepc.edu.np
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};