import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUserComponent {

}
