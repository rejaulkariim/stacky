type TheaderProps = {
  title: string;
  span: string;
  description: string;
};

const SectionHeader = ({ title, span, description }: TheaderProps) => {
  return (
    <div className="text-center space-y-4 max-w-4xl mx-auto py-10">
      <h2 className="text-4xl md:text-5xl font-bold">
        {title} <span className="text-indigo-600">{span}</span>
      </h2>
      <p className="text-foreground max-w-prose mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeader;
