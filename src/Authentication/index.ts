import { assets as onboardingAssets } from './Onboarding';
export { Onboarding } from './Onboarding';
import { assets as welcomeAssets } from './Welcome';
export { Welcome } from './Welcome';
export const assets = [...onboardingAssets, ...welcomeAssets];
