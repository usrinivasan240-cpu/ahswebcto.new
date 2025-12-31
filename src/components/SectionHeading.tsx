interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-display glow-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-accent mt-4 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
