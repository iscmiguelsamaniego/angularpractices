# Lifecycle
**Renders the component view along with its child views**

**Lifecycle event sequence**


Hook method | Timing |  
ngOnChanges() | Called before ngOnInit() |
ngOnInit() | Called once after the first ngOnChanges() |
ngDoCheck() | Called immediately after ngOnChanges() and ngOnInit() |
ngAfterContentInit() | Called once after the first ngDoCheck()|
ngAfterContentChecked() | Called after ngAfterContentInit() and every subsequent ngDoCheck() |
ngAfterViewInit() | Called once after the first ngAfterContentChecked() |
ngAfterViewChecked() | Called after the ngAfterViewInit() and ngAfterContentChecked() |
ngOnDestroy() | Called immediately before Angular destroys |

```
ngOnChanges(changes: SimpleChanges) {
  for (const propName in changes) {
    const chng = changes[propName];
    const cur = JSON.stringify(chng.currentValue);
    const prev = JSON.stringify(chng.previousValue);
    this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  }
}
```
```angular
ngOnInit() {
  this.logger.log(`Spy #${this.id} onInit`);
}

ngDoCheck() {

  if (this.hero.name !== this.oldHeroName) {
    this.changeDetected = true;
    this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
    this.oldHeroName = this.hero.name;
  }

  if (this.power !== this.oldPower) {
    this.changeDetected = true;
    this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
    this.oldPower = this.power;
  }

  if (this.changeDetected) {
    this.noChangeCount = 0;
  } else {
    // log that hook was called when there was no relevant change.
    const count = this.noChangeCount += 1;
    const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
    if (count === 1) {
      // add new "no change" message
      this.changeLog.push(noChangeMsg);
    } else {
      // update last "no change" message
      this.changeLog[this.changeLog.length - 1] = noChangeMsg;
    }
  }

  this.changeDetected = false;
}

ngAfterContentInit() {
  // contentChild is set after the content has been initialized
  this.logIt('AfterContentInit');
  this.doSomething();
}

ngAfterContentChecked() {
  // contentChild is updated after the content has been checked
  if (this.prevHero === this.contentChild.hero) {
    this.logIt('AfterContentChecked (no change)');
  } else {
    this.prevHero = this.contentChild.hero;
    this.logIt('AfterContentChecked');
    this.doSomething();
  }
}

ngAfterViewInit() {
  // viewChild is set after the view has been initialized
  this.logIt('AfterViewInit');
  this.doSomething();
}

ngAfterViewChecked() {
  // viewChild is updated after the view has been checked
  if (this.prevHero === this.viewChild.hero) {
    this.logIt('AfterViewChecked (no change)');
  } else {
    this.prevHero = this.viewChild.hero;
    this.logIt('AfterViewChecked');
    this.doSomething();
  }
}

ngOnDestroy() {
  this.logger.log(`Spy #${this.id} onDestroy`);
}
```
