interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
}

const OnboardingProgress = ({ currentStep, totalSteps }: OnboardingProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div
      className="w-full h-1 rounded-full overflow-hidden"
      style={{ backgroundColor: "#dce3ea" }}
    >
      <div
        className="h-full rounded-full transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: "#5ba8d4",
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default OnboardingProgress;
