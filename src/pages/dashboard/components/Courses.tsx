import MyCourse from "./MyCourse";

export function Courses() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>
      <div className="">
        {/* Course cards will go here */}
        <MyCourse/>
      </div>
    </div>
  )
}