import React from "react";

const ViewSingleProject = () => {
    return (
        <div div className="bg-white rounded-md m-4 p-8">
            <div className="text-2xl font-semibold">Project Details:</div>
            <p className="text-gray-500 text-sm py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eveniet eum architecto omnis commodi molestias libero, veritatis natus ea saepe quos, ipsum dolore repellat? Quod iste perspiciatis autem corrupti atque!
            Doloribus consequuntur vitae nulla, nihil qui exercitationem laborum est quia! Eaque voluptas quod commodi quaerat eum ipsam et nihil quae, expedita, excepturi nemo deleniti tempora facere vitae voluptatum aliquid maxime.</p>
            <div className="my-6 bg-gray-50 rounded-md p-4">
              <div className="text-lg py-3 text-gray-600"><strong>Handled by:</strong> Hasan Quraishi</div>
              <hr></hr>
              <div className="text-lg py-3 text-gray-600"><strong>Title:</strong> EMS System</div>
              <hr></hr>
              <div className="text-lg py-3 text-gray-600"><strong>Type:</strong> Web Application</div>
              <hr></hr>
              <div className="text-lg py-3 text-gray-600"><strong>Status:</strong> <span className="bg-blue-500 text-white text-sm py-1 px-2 rounded-md">In progress</span></div>
              <hr></hr>
              <div className="text-lg py-3 text-gray-600"><strong>Starting Date:</strong> 3/11/22</div>
              <hr></hr>
              <div className="text-lg py-3 text-gray-600"><strong>Ending Date:</strong> 24/1</div>
            </div>
        </div>
    );
};

export default ViewSingleProject;
