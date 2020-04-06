import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit() {
    // Using Vanilla JS
    // document.addEventListener('click', event => {
    //   console.log(event);
    //   setTimeout(() => {
    //     console.log('Finished...');
    //     let counter = 0;
    //
    //     setInterval(() => {
    //       console.log(counter);
    //       counter++;
    //     }, 1000);
    //   }, 3000);
    // });

    //  ==================  Using Rxjs ===========================

    // Interval
    const interval$ = interval(1000);

    // interval$.subscribe(value => console.log('stream-1', value));
    // interval$.subscribe(value => console.log('stream-2', value));

    // Unsubscribe the interval
    const sub = interval$.subscribe(value => console.log('stream-2', value));

    // Unsubscribe after 5s
    setTimeout(() => sub.unsubscribe(), 5000);


    // Timer
    const timer$ = timer(3000, 1000);
    // timer$.subscribe(value => console.log('stream-3', value));

    // FromEvent
    const click$ = fromEvent(document, 'click');
    // click$.subscribe(event => console.log('Clicks', event));


    // With error and complete
    click$.subscribe(
      event => console.log('Clicks', event),
      error => console.log(error),
      () => console.log('Completed...')
    );
  }


}






