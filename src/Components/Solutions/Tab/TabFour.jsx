import React from "react";
import tabFour_ImageOne from "../../../libs/assets/tabContentImage/tab4/image1.png";
const TabFour = () => {
  return (
    <main className="flex flex-col gap-5 ">
      <p className="tab-content-header ">Case Management Systems:</p>
      <div className="text-xl">
        <p>
          Regardless of your system of record, whether it be case management,
          records management, or incident management - organizations can use
          automation for their system of record in several ways:
        </p>

        <ul className="py-8">
          <li>
            <strong>Automating Repetitive Tasks:</strong> Case management
            technology can help manage tasks such as scheduling appointments and
            sending reminders to customers. This eliminates the need for manual
            processing, reducing errors and delays.
          </li>
          <li>
            <strong>Streamlining Workflows:</strong> Organizations are
            increasingly turning to case management automation solutions to
            streamline workflows, increase efficiency, and reduce operational
            costs, including automating task assignments.
          </li>
          <li>
            <strong>Improving Efficiency:</strong> A modern process automation
            platform enables organizations to not only manage cases but also
            improve the efficiency of an entire business process.
          </li>
          <li>
            <strong>Document Management:</strong> Automation in case management
            systems can assist with document management, making it easier to
            track, store, and access necessary files.
          </li>
          <li>
            <strong>Scaling Solutions:</strong> The right case management system
            allows your organization to securely store data, scale solutions,
            and automate processes.
          </li>
          <li>
            <strong>Offloading Routine Chores:</strong> Automated case
            management solutions can take routine chores off agents' to-do
            lists, allowing them to concentrate on more strategic
            responsibilities.
          </li>
          <li>
            <strong>Reporting and Analytics:</strong> Automation can help in
            generating real-time reports and analytics, which can provide
            valuable insights for decision-making.
          </li>
        </ul>

        <p>
          Remember, the goal is to leverage automation to enhance efficiency,
          reduce errors, and free up staff to focus on more complex tasks and
          provide better service to your clients.
        </p>
      </div>
      <img className="w-full h-full" src={tabFour_ImageOne} alt="" />
    </main>
  );
};

export default TabFour;
