import { TestBed } from '@angular/core/testing';
import { RedirectCommand, ResolveFn } from '@angular/router';

import { listResolverResolver } from './list-resolver.resolver';

describe('listResolverResolver', () => {
  const executeResolver: ResolveFn<{ } | RedirectCommand> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => listResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
