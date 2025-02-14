const SidebarItem = ({ item, index, isCollapsed, activeIndex, onClick }) => {
  const Icon = item.icon;

  return (
    <li>
      <button
        onClick={() => onClick(index)}
        className={`
          w-full flex items-center px-3 py-2 rounded-lg
          transition-all duration-200 group
          ${
            activeIndex === index
              ? 'bg-primary-500 text-white'
              : 'text-foreground hover:bg-primary-100'
          }
        `}
      >
        <Icon
          className={`
          w-5 h-5 
          ${activeIndex === index ? 'text-white' : 'text-primary-500'}
          ${!isCollapsed && 'mr-3'}
        `}
        />
        <span
          className={`
          whitespace-nowrap
          ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
          transition-all duration-200
        `}
        >
          {item.label}
        </span>
      </button>
    </li>
  );
};

export default SidebarItem;
