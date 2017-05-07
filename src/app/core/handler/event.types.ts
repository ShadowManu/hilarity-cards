/**
 * Defines the known event types that may happen in the app
 *
 * All event type names must follow the format <type>_<module>_<scope>_<description>,
 * where:
 *   type: the type of event: App (A), Error (E) or User (U)
 *   module: the top level module related to the error
 *   scope: the target component/service/view
 *   description: explanation of the issue being handled
 *
 *  All errors must be ordered lexicograhically and fields must not use underscores themselves
 */
export enum AppEvent {
  // APP EVENTS
  A_AUTH_AUTHSVC_SIGNEDIN,
  A_GAMES_GAMENEW_GAMECREATED,

  // ERROR EVENTS
  E_AUTH_AUTHSVC_SIGNEDIN,
  E_GAMES_GAMENEW_GAMECREATED

  // USER EVENTS
}
