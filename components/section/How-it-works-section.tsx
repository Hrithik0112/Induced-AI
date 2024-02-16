import { AuthenticationSVG } from "../icons/authentication";
import { DescribeSVG } from "../icons/describe";
import { NotificationSVG } from "../icons/notification";
import { WorkflowSVG } from "../icons/workflow";

export const HowItWorks = () => {
  return (
    <div className="w-full max-w-[1392px] px-5">
      <section className="py-24 h-full">
        <div className="w-full flex justify-between items-center">
          <div></div>
          <div className="w-[48%] ml-3 border border-white/10 rounded-3xl">
            AUTOMATE & DELEGATE TO INDUCED
          </div>
        </div>
        <div className="w-full h-full mt-5 grid grid-cols-2 place-items-center">
          <div
            id="table-content"
            className="w-[45%] h-[600px] ml-3 bg-medium-blue text-white block overflow-hidden relative "
          >
            <div className="h-full opacity-10">
              <DescribeSVG className="hidden" />
              <AuthenticationSVG className="hidden" />
              <WorkflowSVG className="hidden" />
              <NotificationSVG />
            </div>
          </div>
          <div
            id="table-data"
            className="bg-white text-black w-[45%] h-[600px] ml-3 flex flex-col items-start  "
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </section>
    </div>
  );
};

// auto-cols-fr auto-rows-auto have to used it grid line gap-8 px-8
