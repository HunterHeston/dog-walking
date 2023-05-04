import DropInForm from "@/components/dropInForm";
import OvernightForm from "@/components/overnightForm";
import Select, { Option } from "@/components/tailwindui/select";
import WalkForm from "@/components/walkForm";

import { useState } from "react";

const walk: Option = {
  id: 1,
  name: "Dog Walk",
};

const dropIn: Option = {
  id: 2,
  name: "Drop In",
};

const overnight: Option = {
  id: 3,
  name: "Overnight",
};

export default function Contact() {
  const [selected, setSelected] = useState<Option>(walk);

  return (
    <>
      <main className="py-36 px-4 flex flex-col items-center">
        <div className="sm:w-1/2">
          <div className="mb-10">
            <Select
              options={[walk, dropIn, overnight]}
              selected={selected}
              setSelected={setSelected}
            ></Select>
          </div>
          {selected.id == dropIn.id && <DropInForm></DropInForm>}
          {selected.id == walk.id && <WalkForm></WalkForm>}
          {selected.id == overnight.id && <OvernightForm></OvernightForm>}
        </div>
      </main>
    </>
  );
}
