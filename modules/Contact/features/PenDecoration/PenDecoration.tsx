interface IProps {

}

const PenDecoration = ({}:IProps) => {
   return (
     <div className="absolute bottom-12 right-8 opacity-30 hidden lg:block">
       <svg
         className="w-12 h-12 text-pink-500 transform rotate-45"
         viewBox="0 0 24 24"
         fill="currentColor"
       >
         <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
       </svg>
     </div>
   );
}

export default PenDecoration;