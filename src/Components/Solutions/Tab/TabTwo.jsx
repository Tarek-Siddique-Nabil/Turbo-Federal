import React from "react";
import {
  tabTwo_Image1,
  tabTwo_Image2,
  tabTwo_Image3,
  tabTwo_Image4,
  tabTwo_Image5,
} from "../../../libs/assets/tabContentImage/tab2";
import {
  exampleOneDialogue,
  exampleTwoDialogue,
} from "../../../libs/data/tabTwoContent";

const TabTwo = () => {
  return (
    <main className="flex flex-col lg:gap-14 gap-10">
      <p className="flex font-Manrope text-5xl font-bold text-center md:text-left">
        AI Work Assistants 🧠🤖
      </p>
      <div className="grid lg:grid-cols-2 items-center">
        <section className=" pt-4 pr-6 font-Manrope text-lg">
          <p className="lg:w-[650px]  md:text-justify">
            We build <strong>enterprise-ready AI work assistants</strong> for
            knowledge, research, and task execution. Powered by next-gen AI,
            theyre designed to augment human workers by simplifying and{" "}
            <strong>automating mundane</strong> operations. They can be deployed
            to your users where they work now, in the form of website widgets,
            workplace chat, IoT, wearables, kiosks, HTML embeddings, and with
            both textual and audio responses, and can include a moving visual
            avatar. They can integrate them with other platforms like
            SharePoint, Slack, Microsoft Teams, Telegram, WhatsApp, Twitter and
            more.
          </p>
          <br />
          <p className="lg:w-[660px]">
            AI work assistants super charge ⚡ team productivity by enhancing
            worker knowledge, skills and abilities (KSAs) 💪 and empowering IT
            systems and tools to:
          </p>
          <br />
          <ul className="flex flex-col gap-1 font-normal  md:text-lg">
            <li className="flex gap-1 items-center">
              🔍<strong>Search</strong> and discover insights
            </li>
            <li className="flex gap-1 items-center">
              ❓<strong>Answer</strong> questions on any topic
            </li>
            <li className="flex gap-1 items-start">
              {" "}
              💡<strong>Extract</strong> insights from data sources sources
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              📚 <strong>Research</strong> any subject matter
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              📊<strong>Analyze</strong> distill, assess findings
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              📝<strong>Summarize</strong> long-form content
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              🎨<strong>Create</strong> use-case specific content
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              🤖<strong>Automate</strong> mundane tasks and workflows
            </li>
          </ul>
        </section>
        <img
          className="lg:w-[500px] lg:h-[500px] mx-auto"
          src={tabTwo_Image1}
          alt=""
        />
      </div>

      <p className="font-Manrope text-2xl">
        It's like having a <strong>super-smart, always-on team member</strong>{" "}
        🥇who can help you manage, organize, and leverage your organization's
        collective knowledge, tools, and data.
      </p>

      <p className="font-Manrope text-2xl ">
        AI Work Assistants can generate new content, ideas, and solutions, based
        on your organization&rsquo;s data. 🚀. They can be configured ⚙ and
        tuned 🔧 for any cognitive process, to include searching multiple data
        stores concurrently, and taking multiple actions and workflow steps on
        behalf of the user. They can be equipped with external APIs to execute
        digital and real-world tasks associated with the user&rsquo;s request.
        All processes performed by AI Work Assistants are guided by the user for
        human-in-the-loop control.
      </p>

      <p className="font-Manrope text-2xl">
        They connect to any structured or unstructured information from 100+
        integrations, custom data sources via API, or from direct data uploads.
        📚
      </p>

      <p className="font-Manrope text-2xl">
        Continuously syncing data pipelines keep your AI Work Assistant&rsquo;s
        knowledge current. 🧠
      </p>

      <div>
        {/* <p className="font-Manrope font-bold text-2xl">
          Our popular AI Assistant types include:
        </p> */}
        <br />
        <br />
        {/* container 2 */}
        <div className="grid lg:grid-cols-2  gap-8 justify-items-start items-start">
          <section className="lg:w-[600px] ">
            <p className="font-Manrope font-bold text-2xl">
              AI Records 🗃️ Assistant:
            </p>
            <p className="font-Manrope text-xl">
              Human-guided AI assistant to autonomously search, edit, create,
              populate, analyze, or perform any other cognitive tasks available
              for a case, incident or other type of record in a Case Management
              System (CMS), or multiple CMS systems. The level of automation,
              autonomy and actions performed are human-defined and customizable
              to each use case.
            </p>
          </section>
          <section className=" lg:w-[600px] mx-auto">
            <p className="font-Manrope font-bold text-2xl">
              AI Knowledge 🧠 Assistant:
            </p>
            <p className="font-Manrope text-xl">
              Human-guided AI assistant to get answers to questions about any of
              your information, case record, work ticket, or any other kind of
              data or knowledge source, structured or unstructured Multi-modal
              capable.
            </p>
          </section>
          <section className=" lg:w-[600px]">
            <p className="font-Manrope font-bold text-2xl">
              AI Research 🔍 Assistant:
            </p>
            <p className="font-Manrope text-xl">
              Human-guided AI assistant to autonomously perform research on
              behalf of its operator. Research can be performed on public web
              internet data, or hooked up to private data. Activities performed
              are controlled by the user, but can include searching, extracting
              insights, analyzing findings, distilling results, summarizing
              information, and much more.
            </p>
          </section>
          <section className=" lg:w-[600px] mx-auto">
            <p className="font-Manrope font-bold text-2xl">
              AI Support 🎧 Assistant:
            </p>
            <p className="font-Manrope text-xl">
              Get answers to tricky questions based in your company&rsquo;s
              trusted knowledge.Make customer communications faster with
              automated summarization.Simplify cross-team collaboration by
              capturing activity outside ticketing systems.Powered by the Glean
              platform.
            </p>
          </section>
          <section className=" lg:w-[600px] ">
            <p className="font-Manrope font-bold text-2xl">
              AI S/W Engineering 💻 Assistant:
            </p>
            <p className="font-Manrope text-xl">
              Take command of engineering workflows by combining information
              from GitHub, Jira, Confluence, Slack and more.Get help writing
              code based on your org&rsquo;s existing work. Debug faster with
              easy answers to technical questions. Powered by the Glean
              platform.
            </p>
          </section>
          <section className=" lg:w-[600px] mx-auto">
            <p className="font-Manrope font-bold text-2xl">
              AI Sales 📊 Assistant:
            </p>
            <p className="font-Manrope text-xl">
              Get a comprehensive view of deal activity by automatically looking
              through Gong, Salesforce, Teams, Slack and beyond. Always be
              prepared for calls with an assistant that leverages your emails,
              calls and company data. Craft the best pitch by mining all of your
              company&rsquo;s content and conversations. Powered by the Glean
              platform.
            </p>
          </section>
          <section className=" lg:w-[600px] ">
            <p className="font-Manrope font-bold text-2xl">
              Custom AI 💡Assistant:
            </p>
            <p className="font-Manrope text-xl">
              We can build customized human-guided AI work assistants to augment
              any mission, program, team, department, office, working group,
              agency, or business, by empowering its workers with next-gen AI.
              Contact us to discuss your specific use cases. We look forward to
              discussing with you!
            </p>
          </section>
        </div>
        {/* image part  */}
        <div className="flex gap-5 my-14 w-full overflow-x-auto">
          <img className="w-[400px] h-[350px] " src={tabTwo_Image2} alt="" />
          <img className="w-[400px] h-[350px] " src={tabTwo_Image3} alt="" />
          <img className="w-[400px] h-[350px] " src={tabTwo_Image4} alt="" />
          <img className="w-[400px] h-[350px] " src={tabTwo_Image5} alt="" />
        </div>
        {/* part3 */}
        <div className="flex flex-col gap-10 ">
          <p className="text-3xl md:text-4xl font-semibold text-center lg:text-left">
            AI Records 🗃️ Assistant:
          </p>
          <p className="text-2xl font-semibold text-center lg:text-left">
            {" "}
            Use Case Example: Law Enforcement 🚨🚔
          </p>
          <p className="text-2xl font-semibold text-center lg:text-left">
            AI Records 🗃️ Assistants can supercharge law enforcement
            records/case/incident management systems with:
          </p>
          <p className="text-xl font-Manrope">
            <strong>1. Identity Verification:</strong> The AI Assistant can help
            law enforcement officers in real-time to verify the identity of
            individuals using the biometric data available in the records
            management system. With a quick command, officers can get the
            relevant information without having to manually search for it,
            freeing their hands and attention to focus on their immediate
            situation.
          </p>
          <p className="text-xl font-Manrope">
            <strong>2. Criminal Background Checks:</strong> Using the AI
            Assistant, officers could quickly perform a complete criminal
            background check on an individual by simply asking the AI to do so,
            rather than navigating through multiple databases or interfaces.{" "}
          </p>
          <p className="text-xl font-Manrope">
            {" "}
            <strong>3. Civil Transactions Processing:</strong> The AI assistant
            could help in processing civil transactions, such as background
            checks for job applications or gun permits, by accessing and
            analyzing the necessary information from the records system.{" "}
          </p>
          <p className="text-xl font-Manrope">
            {" "}
            <strong>4. Real-time Alerting:</strong> The AI assistant could
            provide real-time alerts to officers about any matches found in the
            criminal database upon new biometric data entry. This would be
            particularly useful in apprehending suspects or criminals.
          </p>
          <p className="text-xl font-Manrope">
            <strong>5. Training and Onboarding: </strong> The AI assistant could
            be used to train new law enforcement agents or employees on how to
            use the records system effectively, providing interactive guidance
            and tutorials.
          </p>
          <p className="text-xl font-Manrope">
            {" "}
            <strong>6. Data Ingestion:</strong> The AI assistant could
            streamline and automate data entry tasks, reducing input errors and
            improving overall data quality in the records management system.
          </p>
          <p className="text-xl font-Manrope">
            {" "}
            <strong>7. Streamlining Search:</strong> The AI assistant could
            streamline search processes within the JBIS system. For example, if
            an officer needs to find all records related to a specific case or
            individual, they could simply ask the AI assistant, instead of
            manually searching the system.
          </p>
          <p className="text-xl font-Manrope">
            {" "}
            <strong>8. Reporting:</strong> The AI assistant could automate the
            creation and distribution of reports using the records data, thus
            saving valuable time for law enforcement officers and agency staff.
          </p>
          <p className="text-xl font-Manrope">
            {" "}
            <strong>9. Predictive Policing:</strong> Using machine learning
            algorithms, the AI assistant could identify patterns and trends in
            criminal behavior, providing actionable insight for predictive
            policing.
          </p>
        </div>

        {/* example 1 */}
        <br />
        <br />
        <section className="flex flex-col gap-12">
          <div>
            <p className="font-Manrope font-bold text-2xl">
              Example 1: AI Records 🗃️ Assistant back-and-forth conversation
              flow for a law enforcement system:
            </p>
            <br />
            <div>
              {exampleOneDialogue.map((speach, index) => (
                <div key={index} className="font-Manrope text-xl">
                  <p>
                    <span>User:</span>
                    {speach.user}
                  </p>
                  <p>
                    <span>AI:</span> {speach.assistant}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* example 2 */}
          <div>
            <p className="font-Manrope font-bold text-2xl">Example 2:</p>
            <br />
            <div>
              {exampleTwoDialogue.map((speach, index) => (
                <div key={index} className="font-Manrope text-xl">
                  <p>
                    <span>User:</span>
                    {speach.user}
                  </p>
                  <p>
                    <span>AI:</span> {speach.assistant}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TabTwo;
