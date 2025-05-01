import MyCourse from "./MyCourse";

export function Courses() {
  return (
    <div className="max-w-6xl mx-auto ">
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>
      <div className="max-w-6xl mx-auto ">
        {/* Course cards will go here */}
        <MyCourse/>
      </div>
    </div>
  )
}