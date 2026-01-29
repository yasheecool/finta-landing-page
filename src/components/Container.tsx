import { cn } from '@/lib/utils';

const Container = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return <div className={cn('max-w-6xl mx-auto', classname)}>{children}</div>;
};
export default Container;
