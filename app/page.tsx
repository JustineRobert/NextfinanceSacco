//import { UserButton } from "@clerk/nextjs";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:text-lime-800">
      <div className="p-10 flex flex-col bg-[#2B2929] dark:text-lime-800 text-white space-y-5">
        <h1 className="text-5xl font-bold">Welcome to NextLife SACCO Management Home. <br /> 
        <br />
        Managing all your financail savings in one place.
        </h1>
        
        <p className="pb-20">
        52 WEEKS SAVINGS CHALLENGE 2024!
        </p>
        <Link href="/dashboard" className="flex cursor-pointer bg-lime-500 p-5 w-fit">
          Get Started!
          <ArrowRightCircleIcon className="ml-10" />
        </Link>
      </div>
       <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
        <video autoPlay loop muted className="rounded-lg">
          <source 
            src= "https://i0.wp.com/nextlifefinance.com/wp-content/uploads/2020/10/Savings-Challenge-.png?resize=1536%2C1005&ssl=1"
            //"https://aem.dropbox..com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4/"
          />
            Your browser does not support this video
        </video>
       </div>
      </div>

        <p className="text-center font-bold text-xl pt-5">Declaimer</p>
        <p className="text-center font-light p-2">This SACCO Management App is designed to facilitate and streamline various financial and administrative processes for Savings and Credit Cooperative Organizations (SACCOs). While the app aims to enhance efficiency and convenience, users are advised to read and understand the following disclaimer before utilizing the application:

Data Accuracy:
The app relies on accurate and up-to-date data. Users are responsible for ensuring the accuracy of the information entered into the system. The app provider is not liable for any inaccuracies arising from user input.

Financial Transactions:
Users should exercise caution when conducting financial transactions through the app. The app provider is not responsible for any errors or discrepancies in financial records resulting from user actions.

Security Measures:
The app incorporates security measures to safeguard user data. However, users are encouraged to take additional steps to protect their login credentials and sensitive information. The app provider is not responsible for unauthorized access due to user negligence.

System Availability:
While efforts are made to ensure continuous system availability, the app provider does not guarantee uninterrupted access. Users should be aware of possible downtime for maintenance or unexpected technical issues.

Regulatory Compliance:
Users are responsible for ensuring that their use of the SACCO Management App complies with applicable laws and regulations. The app provider does not assume responsibility for any legal consequences arising from non-compliance.

Third-Party Integrations:
The app may integrate with third-party services for certain functionalities. Users are subject to the terms and conditions of these third-party providers, and the app provider is not responsible for any issues arising from such integrations.

Updates and Maintenance:
The app provider reserves the right to release updates, improvements, or maintenance activities. Users are encouraged to keep their app version up-to-date to benefit from enhancements and bug fixes.

Liability Limitations:
The app provider shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the SACCO Management App.
By using this app, users acknowledge that they have read, understood, and agreed to the terms outlined in this disclaimer. The app provider may update the disclaimer as needed, and users are advised to review it periodically for any changes.Disclaimer for SACCO Management App:

This SACCO Management App is designed to facilitate and streamline various financial and administrative processes for Savings and Credit Cooperative Organizations (SACCOs). While the app aims to enhance efficiency and convenience, users are advised to read and understand the following disclaimer before utilizing the application:

Data Accuracy:
The app relies on accurate and up-to-date data. Users are responsible for ensuring the accuracy of the information entered into the system. The app provider is not liable for any inaccuracies arising from user input.

Financial Transactions:
Users should exercise caution when conducting financial transactions through the app. The app provider is not responsible for any errors or discrepancies in financial records resulting from user actions.

Security Measures:
The app incorporates security measures to safeguard user data. However, users are encouraged to take additional steps to protect their login credentials and sensitive information. The app provider is not responsible for unauthorized access due to user negligence.

System Availability:
While efforts are made to ensure continuous system availability, the app provider does not guarantee uninterrupted access. Users should be aware of possible downtime for maintenance or unexpected technical issues.

Regulatory Compliance:
Users are responsible for ensuring that their use of the SACCO Management App complies with applicable laws and regulations. The app provider does not assume responsibility for any legal consequences arising from non-compliance.

Third-Party Integrations:
The app may integrate with third-party services for certain functionalities. Users are subject to the terms and conditions of these third-party providers, and the app provider is not responsible for any issues arising from such integrations.

Updates and Maintenance:
The app provider reserves the right to release updates, improvements, or maintenance activities. Users are encouraged to keep their app version up-to-date to benefit from enhancements and bug fixes.

Liability Limitations:
The app provider shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the SACCO Management App.
By using this app, users acknowledge that they have read, understood, and agreed to the terms outlined in this disclaimer. The app provider may update the disclaimer as needed, and users are advised to review it periodically for any changes.</p>
     
    </main>
  )
}
