import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface AuthResponse {
  token: string;
  refreshToken?: string;
  // Add other fields as necessary
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authUrl = 'https://your-api.com/auth'; // Update with your API endpoint
  private tokenKey = 'authToken';

  // Define a writable signal for authentication status
  private _isLoggedIn: WritableSignal<boolean> = signal(this.hasToken());
  isLoggedIn = this._isLoggedIn.asReadonly();

  constructor(private http: HttpClient) {}

  /**
   * Logs in the user by sending credentials to the server and storing the received token.
   * @param credentials User's login credentials.
   * @returns Observable<AuthResponse>
   */
  login(credentials: { username: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/login`, credentials).pipe(
      tap((response) => {
        this.setToken(response.token);
        // Optionally handle refreshToken
      })
    );
  }

  /**
   * Logs out the user by removing the token and updating the authentication status.
   */
  logout(): void {
    this.clearToken();
    this._isLoggedIn.set(false);
  }

  /**
   * Retrieves the stored JWT token.
   * @returns string | null
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Stores the JWT token and updates the authentication status.
   * @param token JWT token.
   */
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this._isLoggedIn.set(true);
  }

  /**
   * Clears the stored JWT token and updates the authentication status.
   */
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
    this._isLoggedIn.set(false);
  }

  /**
   * Attempts to refresh the JWT token.
   * @returns Observable<AuthResponse>
   */
  refreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/refresh-token`, {
      // Include necessary payload, e.g., refresh token
    }).pipe(
      tap((response) => {
        this.setToken(response.token);
        // Optionally handle new refreshToken
      })
    );
  }

  /**
   * Determines if a token exists in storage.
   * @returns boolean
   */
  private hasToken(): boolean {
    return !!this.getToken();
  }
}
