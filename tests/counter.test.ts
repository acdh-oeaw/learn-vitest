import { expect, test } from 'vitest';
import Counter from './../src/Counter.vue';
import { render } from 'vitest-browser-vue';

import { page, userEvent } from '@vitest/browser/context';

test('Renders the page correctly', async () => {
  const screen = render(Counter);

  // Check the inital state of the page
  await expect
    .element(screen.getByText('The count is: 1!'))
    .toBeInTheDocument();

  // Check the button increment
  await expect.element(screen.getByText('Increment')).toBeInTheDocument();

  // Check the button decrement
  await expect.element(screen.getByText('Decrement')).toBeInTheDocument();
  const button = page.getByRole('button', { name: 'Increment' });
  // Click the button
  await userEvent.click(button);

  // Decrement the counter
  await userEvent.click(page.getByRole('button', { name: 'Decrement' }));

  // Check the button Counter value
  await expect
    .element(screen.getByText('The button has been clicked 2 times'))
    .toBeInTheDocument();
});
