// testing custom hooks
// http://localhost:3000/counter-hook

import {act, renderHook} from '@testing-library/react'
import useCounter from '../../components/use-counter'


test('exposes the count and increment/decrement functions', async () => {
  const {result} = renderHook(() => useCounter())
  expect(result.current.count).toBe(0);

  act(() => result.current.increment())
  expect(result.current.count).toBe(1);

  act(() => result.current.increment())
  expect(result.current.count).toBe(2);

  act(() => result.current.decrement())
  expect(result.current.count).toBe(1);

  act(() => result.current.decrement())
  expect(result.current.count).toBe(0);
})

test('use the initial count with the counter', async () => {
  const {result} = renderHook(() => useCounter({initialCount: 10}))
  expect(result.current.count).toBe(10);

  act(() => result.current.increment())
  expect(result.current.count).toBe(11);

  act(() => result.current.increment())
  expect(result.current.count).toBe(12);

  act(() => result.current.decrement())
  expect(result.current.count).toBe(11);

  act(() => result.current.decrement())
  expect(result.current.count).toBe(10);
})

test('use a custom step', async () => {
  const {result} = renderHook(() => useCounter({step: 5}))
  expect(result.current.count).toBe(0);

  act(() => result.current.increment())
  expect(result.current.count).toBe(5);

  act(() => result.current.increment())
  expect(result.current.count).toBe(10);

  act(() => result.current.decrement())
  expect(result.current.count).toBe(5);

  act(() => result.current.decrement())
  expect(result.current.count).toBe(0);
})
