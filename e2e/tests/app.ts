const appSelector = '.app';
const settingsButtonSelector = 'a[href="/settings"]';
const withrawButtonSelector = 'a[href="/withdraw"]';
const backButtonSelector = 'a[href="/"]';

async function getSettingsButton() {
  return page.$(settingsButtonSelector);
}

async function getWithdrawButton() {
  return page.$(withrawButtonSelector);
}

async function getBackButton() {
  return page.$(backButtonSelector);
}

async function loadMain() {
  await page.goto('http://localhost:1234/', {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });
}

describe('App', () => {
  beforeEach(async () => {
    await loadMain();
  });

  it('should load app', async () => {
    const pageContent = await page.$eval(appSelector, (e) => e.innerHTML);
    expect(pageContent).not.toBe('');
  });

  it('should show navigation buttons', async () => {
    const withdrawButton = await getWithdrawButton();
    const settingsButton = await getSettingsButton();

    expect(settingsButton).not.toBeNull();
    expect(withdrawButton).not.toBeNull();
  });

  it('should open withdrawal page', async () => {
    const withdrawButton = await getWithdrawButton();
    await withdrawButton.click();
    await page.waitForSelector(backButtonSelector);

    expect(page.url()).toContain('/withdraw');
  });

  it('should open settings page', async () => {
    const settingsButton = await getSettingsButton();
    await settingsButton.click();

    await page.waitForSelector(backButtonSelector);
    expect(page.url()).toContain('/settings');
  });
});
