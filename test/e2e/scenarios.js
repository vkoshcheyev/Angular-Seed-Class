'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {
    
	var htmlElement; 
	 
    beforeEach(function() {
      browser.get('index.html#/view1');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

	/* Tests for the "Make" section */
    it('should have a "Make:" label', function() {
	  htmlElement = element(by.id('lblMake'));
      expect(htmlElement).not.toBe(undefined);
      expect(htmlElement.getText()).toEqual('Make:');
    });

    it('should have a "Make" edit', function() {
	  htmlElement = element(by.id('edMake'));
      expect(htmlElement).not.toBe(undefined);
      expect(htmlElement.getAttribute('value')).toEqual('Honda');
    });
	
    it('should have a "Make" span', function() {
	  htmlElement = element(by.id('sMake'));
      expect(htmlElement).not.toBe(undefined);
    });
	
    it('should be able to enter data in the Make edit, edit and span should have the entered value', function() {
	  htmlElement = element(by.id('sMake'));
      expect(htmlElement.getText()).toEqual(element(by.id('edMake')).getAttribute('value'));
    });

	/* Tests for the "Model" section */
    it('should have a "Model:" label', function() {
	  htmlElement = element(by.id('lblModel'));
      expect(htmlElement).not.toBe(undefined);
      expect(htmlElement.getText()).toEqual('Model:');
    });

    it('should have a "Model" edit', function() {
	  htmlElement = element(by.id('edModel'));
      expect(htmlElement).not.toBe(undefined);
    });
	
    it('should have a "Model" span', function() {
	  htmlElement = element(by.id('sModel'));
      expect(htmlElement).not.toBe(undefined);
    });
	
    it('should be able to enter data in the Model edit, edit and span should have the entered value', function() {
	  htmlElement = element(by.id('sModel'));
      expect(htmlElement.getText()).toEqual(element(by.id('edModel')).getAttribute('value'));
    });

	/* Tests for the "Year" section */
    it('should have a "Year:" label', function() {
	  htmlElement = element(by.id('lblYear'));
      expect(htmlElement).not.toBe(undefined);
      expect(htmlElement.getText()).toEqual('Year:');
    });

    it('should have a "Year" edit', function() {
	  htmlElement = element(by.id('edYear'));
      expect(htmlElement).not.toBe(undefined);
    });
	
    it('should have a "Year" span', function() {
	  htmlElement = element(by.id('sYear'));
      expect(htmlElement).not.toBe(undefined);
    });
	
    it('should be able to enter data in the Year edit, edit and span should have the entered value', function() {
	  htmlElement = element(by.id('sYear'));
      expect(htmlElement.getText()).toEqual(element(by.id('edYear')).getAttribute('value'));
    });
	
	/* Tests for the "Price" section */
    it('should have a "Price:" label', function() {
	  htmlElement = element(by.id('lblPrice'));
      expect(htmlElement).not.toBe(undefined);
      expect(htmlElement.getText()).toEqual('Price:');
    });

    it('should have a "Price" edit', function() {
	  htmlElement = element(by.id('edPrice'));
      expect(htmlElement).not.toBe(undefined);
    });
	
    it('should have a "Price" span', function() {
	  htmlElement = element(by.id('sPrice'));
      expect(htmlElement).not.toBe(undefined);
    });
	
    it('should be able to enter data in the Price edit, edit and span should have the entered value', function() {
	  htmlElement = element(by.id('sPrice'));
      expect(htmlElement.getText()).toEqual('USD$24,000.00');
    });
	
  });


  describe('view2', function() {
  
    var htmlElement; 
	
    beforeEach(function() {
      browser.get('index.html#/view2');
    });

    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

    it('should have a list of cars and should have the correct number of rows', function() {
	  htmlElement = element(by.id('listOfCarsTable'));
      expect(htmlElement).not.toBe(undefined);
      expect(element.all(by.repeater('car in cars')).count()).toEqual(3);
    });

    it('should have "Honda" as the make in the first row', function() {
	  htmlElement = element(by.id('carMakeColumn'));
      expect(htmlElement.getText()).toEqual('Honda');
    });
	
  });
});
