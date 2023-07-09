import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUserComponent {
  private readonly params = toSignal(this.route.params);

  public readonly userName = computed(() => {
    const id = Number(this.params()?.['id']);

    return this.userService.getUserName(id);
  });

  public get users() {
    return this.userService.getUsers();
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {}
}
