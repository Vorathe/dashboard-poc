import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SetupForm } from '../../interfaces';
import { CreditAppStateService } from '../../services';
import { SlideUpAnimation, FadeInOutAnimation, SlideAnimation } from '../animations/global';

@Component({
  selector: 'cmp-credit-app',
  templateUrl: './credit-app.component.html',
  styleUrls: ['./credit-app.component.scss'],
  animations: [ SlideUpAnimation, FadeInOutAnimation, SlideAnimation ]
})
export class CreditAppComponent implements OnInit {
  @ViewChild('tpl') view;
  creditAppOpen = false;
  slideUpApp = false;
  sections = [
    {
      name: 'Setup',
      active: true,
      enabled: true,
      open: true
    },
    {
      name: 'Deal Team',
      active: false,
      enabled: true,
      open: true
    },
    {
      name: 'Applicant',
      active: false,
      enabled: false,
      open: false
    },
    {
      name: 'References',
      active: false,
      enabled: false,
      open: false
    },
    {
      name: 'Guarantors',
      active: false,
      enabled: false,
      open: false
    },
    {
      name: 'Vehicles & Equip',
      active: false,
      enabled: false,
      open: false
    },
    {
      name: 'Finance Structure',
      active: false,
      enabled: false,
      open: false
    }
  ];
  animationTime: number;
  individualOpen = false;
  businessOpen = false;

  public setupForm: FormGroup;
  public submitted = false;

  constructor(private _creditAppState: CreditAppStateService, private _fb: FormBuilder) {
    this._creditAppState.changeEmitted$.subscribe(
      e => {
        this.creditAppOpen = e;
      }
    );
  }

  closeCreditApp() {
    this.slideUpApp = false;
  }

  fadeCallback(e) {
    if (e.fromState === 'void') {
      this.slideUpApp = true;
    } else {
      this.slideUpApp = false;
    }
  }

  slideCallback(e) {
    this.animationTime = e.totalTime;
    if (e.toState === 'void') {
      console.log(e);
      this.creditAppOpen = false;
      this._creditAppState.emitChange(this.creditAppOpen);
    }
  }

  // TODO: Probably a more elegant way to get animation timing, perhaps requestAnimationFrame.
  navigateToSection(e) {
    let elem = document.getElementById(e);
    setTimeout(() => {
      this.view.nativeElement.scrollTop = elem.offsetTop;
    }, this.animationTime || 140);
  }

  openAccordion(i) {
    if (this.sections[i].enabled) {
      this.sections[i].open = !this.sections[i].open;
    } else {
      console.log('Section disabled');
    }
  }

  ngOnInit() {
    this.setupForm = this._fb.group({
      conditional: this._fb.group({
        applicationType: ['business'],
        fein: ['', Validators.required]
      }),
      saleAmount: ['', Validators.required]
    });

    this.subcribeToSetupFormChanges();
  }

  subcribeToSetupFormChanges() {
    const myFormValueChanges$ = this.setupForm.valueChanges;

    myFormValueChanges$.subscribe(x => {
      let ssnFieldExists = (<FormGroup>(<FormGroup>this.setupForm).controls['conditional'])
        .contains('ssn');
      let feinFieldExists = (<FormGroup>(<FormGroup>this.setupForm).controls['conditional'])
        .contains('fein');

      if (x.conditional.applicationType === 'business' && !feinFieldExists) {
        this.addConditionalField('fein');

        if (ssnFieldExists) {
          this.removeConditionalField('ssn');
          this.individualOpen = false;
          this.businessOpen = true;
        }
      } else if (x.conditional.applicationType === 'individual' && !ssnFieldExists) {
        this.addConditionalField('ssn');

        if (feinFieldExists) {
          this.removeConditionalField('fein');
          this.businessOpen = false;
          this.individualOpen = true;
        }
      }
    });
  }

  addConditionalField(field) {
    (<FormGroup>(<FormGroup>this.setupForm).controls['conditional'])
      .addControl(field, new FormControl('', Validators.required));
  }

  removeConditionalField(field) {
    (<FormGroup>(<FormGroup>this.setupForm).controls['conditional'])
      .removeControl(field);
  }

  save(model: SetupForm, isValid: boolean) {
    this.submitted = true;
    console.log(model, isValid);
  }
}
