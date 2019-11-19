describe('save screenshot command takes screenshot in WebDriverIO',() => {
    it('should take screenshot of page view of webpage', (done) => {        
           //browser.url('https://the-internet.herokuapp.com/drag_and_drop')
           browser.url('https://jqueryui.com/droppable/')
            setTimeout(()=>{
                console.log('test');
               const drag = $('#draggable')
               const target = $('#droppable')
               console.log(browser.isElementDisplayed('#draggable'))
               console.log(browser.isElementDisplayed('#droppable'))      
               drag.dragAndDrop(target, 5000)
               browser.pause(10000)
               done();
           },3000)
    });
}); 
