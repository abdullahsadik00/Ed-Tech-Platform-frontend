import { cn } from "@/lib/utils";

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value:number,
    size?:number,
    showPercentage?:boolean
}

function CircularProgress({ value,
    size = 44,
    showPercentage = false,
    className,
    ...props}:CircularProgressProps){
const RADIUS = 16
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const OFFSET =  CIRCUMFERENCE - (value /100) * CIRCUMFERENCE
return ( <div
    className={cn("relative", className)}
    style={{ width: size, height: size }}
    {...props}
  >
    <svg
      className="size-full -rotate-90"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle
        cx="18"
        cy="18"
        r={RADIUS}
        fill="none"
        strokeWidth="4"
        className="stroke-current text-gray-300/50 "
      />
      {/* Progress Circle */}
      <circle
        cx="18"
        cy="18"
        r={RADIUS}
        fill="none"
        strokeWidth="4"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={OFFSET}
        strokeLinecap="round"
        className="stroke-current text-blue-600 dark:text-blue-500 transition-all duration-300"
      />
    </svg>

    {showPercentage && (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">
          {Math.round(value)}%
        </span>
      </div>
    )}
  </div>)
}

export {CircularProgress}