export type BookingMode = 'automatic' | 'manual';
export type RoomSize = 3 | 4;
export type RoomPreference = 'women' | 'men' | 'contact';
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';
export type BookingEnv = Record<string, string | boolean | undefined> & {
  BOOKING_TOKEN_SECRET?: string;
  ROOM_ADMIN_TOKEN?: string;
  STELLO_EVENT_ID?: string;
  SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
};

export interface PersonInput {
  firstname: string;
  lastname: string;
  mail: string;
  phone: string;
  reference?: string;
  proof?: string;
}

export interface BookingSubmission {
  requestKey: string;
  mode: BookingMode;
  people: PersonInput[];
  preference: RoomPreference;
  note: string;
  accepted: boolean;
}

export type BookingPerson = Omit<PersonInput, 'reference' | 'proof'> & { ticketId: string | null };
export type StoredRequest = Omit<BookingSubmission, 'people' | 'accepted'> & {
  people: BookingPerson[];
  requestHash: string;
};

export interface BookingReceipt {
  reference: string;
  status: BookingStatus;
  groupSize: number;
  roomSize: number | null;
}

export interface AdminBooking extends Omit<BookingReceipt, 'roomSize'> {
  id: number;
  preference: RoomPreference | null;
  note: string | null;
  staffNote: string | null;
  allocationId: number | null;
  createdAt: string;
  people: Array<Omit<BookingPerson, 'ticketId'> & { responsible: boolean }> | null;
}

export type AdminAction =
  | { action: 'assign'; ids: number[]; roomType: RoomSize; note: string; preferencesConfirmed: boolean }
  | { action: 'cancel'; id: number; note: string };

export interface Availability { roomType: RoomSize; remaining: number }
export interface TicketProof { proof: string; valid: true }
export type VerifyTicket = (reference: string, context: { eventId: string; env: BookingEnv }) =>
  Promise<{ ticketId: string; eventId: string; valid: boolean } | null>;

export type RpcCall =
  | ['skiogmagi_availability' | 'skiogmagi_admin_list']
  | ['skiogmagi_rate_limit', { p_bucket: string }]
  | ['skiogmagi_create_booking', { p_request: StoredRequest }]
  | ['skiogmagi_assign_room', { p_ids: number[]; p_room_type: RoomSize; p_note: string; p_preferences_confirmed: boolean }]
  | ['skiogmagi_cancel_booking', { p_id: number; p_note: string }];
export type BookingRpc = (...call: RpcCall) => Promise<unknown>;

export function isRoomSize(value: unknown): value is RoomSize {
  return value === 3 || value === 4;
}

export function isRoomPreference(value: unknown): value is RoomPreference {
  return value === 'women' || value === 'men' || value === 'contact';
}
