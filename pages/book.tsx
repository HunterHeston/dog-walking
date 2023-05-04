import { FormEvent, useState } from "react";

enum VisitType {
  DropIn = "drop-in",
  DogWalk = "dog-walk",
  HouseSitting = "house-sitting",
}

export default function Contact() {
  const [visitType, setVisitType] = useState<VisitType>(VisitType.DropIn);

  return (
    <>
      <main className="py-24">
        <select name="visit-type" id="visit-type">
          <option value={VisitType.DropIn}>Drop-In Visit</option>
          <option value={VisitType.DogWalk}>Dog Walk</option>
          <option value={VisitType.HouseSitting}>House Sitting</option>
        </select>
      </main>
    </>
  );
}
