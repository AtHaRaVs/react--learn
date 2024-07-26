import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[60rem] mt-16 mx-auto">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="tracking-wider text-stone-800 hover:text-stone-950 ">
            Cancel
          </button>
        </li>
        <li>
          <button className="tracking-wider py-2 px-6 rounded bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textArea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
