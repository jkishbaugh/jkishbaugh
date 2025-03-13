import { generateReadMe, setBitMojiImageFile, buildShieldURL, prepData} from './index.js';
import { expect } from 'chai';

describe('index.js Tests', () => {
  it('should generate README without errors', () => {
    generateReadMe();
    // No assertion needed, just ensure no errors are thrown
  });

  it('should set BitMoji image URL for February 14th', () => {
    let date = new Date('2023-02-14T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/heart-headband.png");
  });
  it('should set BitMoji image URL for March 17th', () => {
    let date = new Date('2025-03-17T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/lucky.png");
  });
  it('should set BitMoji image URL for July 4th', () => {
    let date = new Date('2025-07-04T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/july4.png");
  });
  it('should set BitMoji image URL for Oct 3rd', () => {
    let date = new Date('2025-10-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/eating cake friend.png");
  });
  it('should set BitMoji image URL for Thanksgiving', () => {
    let date = new Date('2025-11-27T00:00:00');
    let date2 = new Date('2025-11-26T00:00:00');
    let result = setBitMojiImageFile(date);
    let result2 = setBitMojiImageFile(date2);
    expect(result).to.equal("/images/grateful.png");
    expect(result2).to.equal("/images/grateful.png");
  });
  it('should set BitMoji image URL for Christmas', () => {
    let date = new Date('2025-12-20T00:00:00');
    let date2 = new Date('2025-12-31T00:00:00');
    let result = setBitMojiImageFile(date);
    let result2 = setBitMojiImageFile(date2);
    expect(result).to.equal("/images/merry christmas pop up card.png");
    expect(result2).to.equal("/images/merry christmas pop up card.png");
  });
  it('should set BitMoji image URL for January', () => {
    let date = new Date('2025-01-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/snow globe wave.png");
  });
  it('should set BitMoji image URL for February', () => {
    let date = new Date('2025-02-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/snow globe wave.png");
  });
  it('should set BitMoji image URL for December', () => {
    let date = new Date('2025-02-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/snow globe wave.png");
  });
  it('should set BitMoji image URL for March', () => {
    let date = new Date('2025-03-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/hiking.png");
  });
  it('should set BitMoji image URL for April', () => {
    let date = new Date('2025-04-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/hiking.png");
  });
  it('should set BitMoji image URL for May', () => {
    let date = new Date('2025-05-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/hiking.png");
  });
  it('should set BitMoji image URL for June', () => {
    let date = new Date('2025-06-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/summer.png");
  });
  it('should set BitMoji image URL for July', () => {
    let date = new Date('2025-07-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/summer.png");
  });
  it('should set BitMoji image URL for August', () => {
    let date = new Date('2025-08-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/summer.png");
  });
it('should set BitMoji image URL for September', () => {
    let date = new Date('2025-09-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/a pile of autumn leaves.png");
});
it('should set BitMoji image URL for October', () => {
    let date = new Date('2025-10-01T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/a pile of autumn leaves.png");
});
it('should set BitMoji image URL for November', () => {
    let date = new Date('2025-11-03T00:00:00');
    let result = setBitMojiImageFile(date);
    expect(result).to.equal("/images/a pile of autumn leaves.png");
});

  it('should build correct shield URL', () => {
    const testSkill = {
      label: "Java",
      logo: "Java",
      color: "E17F33",
      style: "for-the-badge"
    };
    const expectedURL = "https://img.shields.io/badge/Java-informational?style=for-the-badge&logo=Java&logoColor=white&color=E17F33";
    expect(buildShieldURL(testSkill)).to.equal(expectedURL);
  });

  it('should prepare data correctly', () => {
    let data =  prepData();
    expect(data.languages).to.be.an('array').that.is.not.empty;
    expect(data.frameworks).to.be.an('array').that.is.not.empty;
    expect(data.tools).to.be.an('array').that.is.not.empty;
    expect(data.databases).to.be.an('array').that.is.not.empty;
    expect(data.explorations).to.be.an('array').that.is.not.empty;
    expect(data.name).to.equal("Justin");
    expect(data.bitmoji).to.be.a('string').that.is.not.empty;
  });
});
