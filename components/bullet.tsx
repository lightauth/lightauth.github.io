export function Bullet({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 font-medium mr-3">
      {children}
    </div>
  );
}
