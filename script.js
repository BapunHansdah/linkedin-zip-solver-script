const scriptContent = document.getElementById('rehydrate-data').textContent;

const solutionMatch = scriptContent.match(/\\"solution\\":\[(.*?)\]/s);

if (solutionMatch) {
  const solution = JSON.parse('[' + solutionMatch[1] + ']');

  function click(cellNumber) {
    const cell = document.querySelector(`[data-cell-idx="${cellNumber}"]`);
    
    if (!cell) {
      return;
    }
    
    cell.click();
    const mousedown = new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window });
    const mouseup = new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window });
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
    
    cell.dispatchEvent(mousedown);
    cell.dispatchEvent(mouseup);
    cell.dispatchEvent(clickEvent);
    const pointerdown = new PointerEvent('pointerdown', { bubbles: true, cancelable: true, view: window });
    const pointerup = new PointerEvent('pointerup', { bubbles: true, cancelable: true, view: window });
    
    cell.dispatchEvent(pointerdown);
    cell.dispatchEvent(pointerup);
  }

  let delay = 100;
  solution.forEach((cellNumber, index) => {
    setTimeout(() => {
      click(cellNumber);
    }, index * delay);
  });

} 
