type TheaderProps = {
  title: string;
  span: string;
  description: string;
};

const SectionHeader = ({ title, span, description }: TheaderProps) => {
  return (
    <div className="text-center space-y-2 max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        {title} <span className="text-indigo-600">{span}</span>
      </h2>
      <p className="text-muted-foreground max-w-prose mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeader;
