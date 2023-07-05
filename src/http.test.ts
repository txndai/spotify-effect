import { test, expect } from "vitest";
import * as http from './http'
import * as Effect from "@effect/io/Effect"
import { identity, pipe } from "@effect/data/Function"

type TodoItem = {
  
}

test('http get request returns valid JSON', async () => { 
  // TODO: nice to have - sane retry logic build right in
  const Todo1 = await Effect.runPromise(http.get<TodoItem>('https://jsonplaceholder.typicode.com/todos/1'))
  console.log('Todo1:', Todo1)
 })