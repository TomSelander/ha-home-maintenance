export const loadConfigDashboard = async (): Promise<void> => {
  // Load HA config dashboard resources if available
  if ((window as any).loadCardHelpers) {
    await (window as any).loadCardHelpers();
  }
};
