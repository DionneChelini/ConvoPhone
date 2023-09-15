export type OnboardDataType = {
  setOnboardData: React.Dispatch<React.SetStateAction<OnboardData>>;
  onboardData: OnboardData;
};

type OnboardData = {
  progressBar: {
    completed: number;
    total: number;
  };
  selectedPrison: null | string;
  prisonId: null | string;
  prefix: null | string;
  forwardingNumber: null | string;
  localNumber: null | object;
  email: null | string;
  name: null | string;
};

export interface Frequency {
  value: {
    [key: string]: string;
  };

  label: string;
  priceSuffix: string;
}
[];
