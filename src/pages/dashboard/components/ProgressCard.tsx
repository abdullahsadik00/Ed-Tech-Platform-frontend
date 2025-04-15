type ProgressCardProps = {
    title: string;
    value: string;
    color: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  };
  
  export const ProgressCard = ({ title, value, color }: ProgressCardProps) => {
    const colorMap = {
      primary: 'bg-primary-100 text-primary-700',
      secondary: 'bg-secondary-100 text-secondary-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      error: 'bg-red-100 text-red-700'
    };
  
    return (
      <div className={`${colorMap[color]} p-5 rounded-xl`}>
        <h3 className="text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold mb-3">{value}</p>
        <div className="w-full bg-white bg-opacity-50 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${colorMap[color].replace('100', '500')}`}
            style={{ width: color === 'primary' ? '78%' : color === 'secondary' ? '80%' : '100%' }}
          ></div>
        </div>
      </div>
    );
  };