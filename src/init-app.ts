import { HttpListener } from '@stayer/interfaces';
import { initEndpoints } from '@stayer/routing';
import { injector } from '@stayer/injection';
import { performRequest } from '@stayer/engine';

export default function initApp(services: Function[]): HttpListener {
  const endpoints = initEndpoints(injector);
  return performRequest(endpoints);
}
