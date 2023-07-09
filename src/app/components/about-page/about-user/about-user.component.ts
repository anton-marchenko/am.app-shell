import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-about-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUserComponent {
  private readonly users = new Map([
    [1, 'Anton'],
    [2, 'Aram'],
    [3, 'Stas'],
    [4, 'Artem'],
  ]);

  private readonly params = toSignal(this.route.params);

  public readonly userName = computed(() => {
    const id = Number(this.params()?.['id']);

    return this.users.get(id);
  });

  constructor(private readonly route: ActivatedRoute) {}
}
