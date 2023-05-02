import { FormEvent, useState } from "react";

enum VisitType {
  DropIn = "drop-in",
  DogWalk = "dog-walk",
  HouseSitting = "house-sitting",
}

enum Duration {
  ThirtyMinutes = 30,
  SixtyMinutes = 60,
}

enum PetType {
  Cat = "cat",
  Dog = "dog",
}

export default function Contact() {
  const [visitType, setVisitType] = useState<VisitType>(VisitType.DropIn);
  const [duration, setDuration] = useState<Duration>(Duration.ThirtyMinutes);
  const [visitDates, setVisitDates] = useState<Date[]>([]);
  const [petType, setPetType] = useState<PetType>(PetType.Cat);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log(visitType);
  };

  return (
    <>
      <main>
        <h1>Contact Cheyenne</h1>
        <form onSubmit={handleSubmit} className="flex flex-col" action="submit">
          <select name="visit-type" id="visit-type">
            <option value={VisitType.DropIn}>Drop-In Visit</option>
            <option value={VisitType.DogWalk}>Dog Walk</option>
            <option value={VisitType.HouseSitting}>House Sitting</option>
          </select>
          <hr />
          <label htmlFor="visit-length">How Long?</label>
          <button
            type="button"
            name="visit-length"
            className={duration == Duration.ThirtyMinutes ? "bg-gray-300" : ""}
            onClick={() => setDuration(Duration.ThirtyMinutes)}
          >
            30 Minutes
          </button>
          <button
            type="button"
            name="visit-length"
            className={duration == Duration.SixtyMinutes ? "bg-gray-300" : ""}
            onClick={() => setDuration(Duration.SixtyMinutes)}
          >
            60 Minutes
          </button>
          <hr />

          {visitDates.map((_, i) => (
            <input key={i} type="datetime-local" name="visit-date" />
          ))}
          <button
            type="button"
            onClick={() => setVisitDates(visitDates.concat(new Date()))}
          >
            Add Day +
          </button>
          <hr />
          <p>Pets</p>
          <label htmlFor="pet-type">What type of pet?</label>
          <button
            type="button"
            className={petType == PetType.Cat ? "bg-gray-200" : ""}
            onClick={() => setPetType(PetType.Cat)}
          >
            Cat
          </button>
          <button
            type="button"
            className={petType == PetType.Dog ? "bg-gray-200" : ""}
            onClick={() => setPetType(PetType.Dog)}
          >
            Dog
          </button>
          <hr />
          <label htmlFor="pet-name">Pet Name</label>
          <input type="text" name="pet-name" />
          <label htmlFor="pet-weight">Pet Weight(lbs)</label>
          <input type="number" name="pet-weight" />
          <label htmlFor="pet-age">Pet Age</label>
          <input type="number" name="pet-age" />
          <label htmlFor="pet-breed">Pet Breed</label>
          <input type="text" name="pet-breed" />
          <label htmlFor="Sex">Sex</label>
          <select name="sex" id="sex">
            <option>Female</option>
            <option>Male</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}
