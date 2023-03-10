export class event {
    event_id: number;
    event_name: string;
    event_description: string;
    event_date: string;
    event_time: string;
    event_place: string;
    event_demonstrate_start_place: string;
    event_demonstrate_end_place: string;
    event_organisation: number;
    event_image: string;
    event_video: string;
    event_duration: string;
    event_strike_fund_link: string;
    event_price: number;
    event_max_participant: number;
    event_min_participant: number;
    event_is_active: boolean;
    event_is_public: boolean;
    event_is_free: boolean;
    event_is_online: boolean;
    evennt_is_full: boolean;


    constructor(event_id: number, event_name: string, event_description: string, event_date: string, event_time: string, event_place: string, event_demonstrate_start_place: string, event_demonstrate_end_place: string, event_organisation: number, event_image: string, event_video: string, event_duration: string, event_strike_fund_link: string, event_price: number, event_max_participant: number, event_min_participant: number, event_is_active: boolean, event_is_public: boolean, event_is_free: boolean, event_is_online: boolean, evennt_is_full: boolean) {
        this.event_id = event_id;
        this.event_name = event_name;
        this.event_description = event_description;
        this.event_date = event_date;
        this.event_time = event_time;
        this.event_place = event_place;
        this.event_demonstrate_start_place = event_demonstrate_start_place;
        this.event_demonstrate_end_place = event_demonstrate_end_place;
        this.event_organisation = event_organisation;
        this.event_image = event_image.slice(7);
        this.event_video = event_video;
        this.event_duration = event_duration;
        this.event_strike_fund_link = event_strike_fund_link;
        this.event_price = event_price;
        this.event_max_participant = event_max_participant;
        this.event_min_participant = event_min_participant;
        this.event_is_active = event_is_active;
        this.event_is_public = event_is_public;
        this.event_is_free = event_is_free;
        this.event_is_online = event_is_online;
        this.evennt_is_full = evennt_is_full;
    }

    getEvent_id(): number {
        return this.event_id;
    }
    getEvent_name(): string {
        return this.event_name;
    }
    getEvent_description(): string {
        return this.event_description;
    }
    getEvent_date(): string {
        return this.event_date;
    }
    getEvent_time(): string {
        return this.event_time;
    }
    getEvent_place(): string {
        return this.event_place;
    }
    getEvent_demonstrate_start_place(): string {
        return this.event_demonstrate_start_place;
    }
    getEvent_demonstrate_end_place(): string {
        return this.event_demonstrate_end_place;
    }
    getEvent_organisation(): number {
        return this.event_organisation;
    }
    getevent_image(): string {
        return this.event_image;
    }
    getImageUrlToFetch(): string {
        return 'http://0.0.0.0:8000/'+this.event_image;
    }
    getEvent_video(): string {
        return this.event_video;
    }
    getEvent_duration(): string {
        return this.event_duration;
    }
    getEvent_strike_fund_link(): string {
        return this.event_strike_fund_link;
    }
    getEvent_price(): number {
        return this.event_price;
    }
    getEvent_max_participant(): number {
        return this.event_max_participant;
    }
    getEvent_min_participant(): number {
        return this.event_min_participant;
    }
    getEvent_is_active(): boolean {
        return this.event_is_active;
    }
    getEvent_is_public(): boolean {
        return this.event_is_public;
    }
    getEvent_is_free(): boolean {
        return this.event_is_free;
    }
    getEvent_is_online(): boolean {
        return this.event_is_online;
    }
    getEvennt_is_full(): boolean {
        return this.evennt_is_full;
    }

    setEvent_id(event_id: number) {
        this.event_id = event_id;
    }
    setEvent_name(event_name: string) {
        this.event_name = event_name;
    }
    setEvent_description(event_description: string) {
        this.event_description = event_description;
    }
    setEvent_date(event_date: string) {
        this.event_date = event_date;
    }
    setEvent_time(event_time: string) {
        this.event_time = event_time;
    }
    setEvent_place(event_place: string) {
        this.event_place = event_place;
    }
    setEvent_demonstrate_start_place(event_demonstrate_start_place: string) {
        this.event_demonstrate_start_place = event_demonstrate_start_place;
    }
    setEvent_demonstrate_end_place(event_demonstrate_end_place: string) {
        this.event_demonstrate_end_place = event_demonstrate_end_place;
    }
    setEvent_organisation(event_orga_id: number) {
        this.event_organisation = event_orga_id;
    }
    setevent_image(event_image: string) {
        this.event_image = event_image;
    }
    setEvent_video(event_video: string) {
        this.event_video = event_video;
    }
    setEvent_duration(event_duration: string) {
        this.event_duration = event_duration;
    }
    setEvent_strike_fund_link(event_strike_fund_link: string) {
        this.event_strike_fund_link = event_strike_fund_link;
    }
    setEvent_price(event_price: number) {
        this.event_price = event_price;
    }
    setEvent_max_participant(event_max_participant: number) {
        this.event_max_participant = event_max_participant;
    }
    setEvent_min_participant(event_min_participant: number) {
        this.event_min_participant = event_min_participant;
    }
    setEvent_is_active(event_is_active: boolean) {
        this.event_is_active = event_is_active;
    }
    setEvent_is_public(event_is_public: boolean) {
        this.event_is_public = event_is_public;
    }
    setEvent_is_free(event_is_free: boolean) {
        this.event_is_free = event_is_free;
    }
    setEvent_is_online(event_is_online: boolean) {
        this.event_is_online = event_is_online;
    }
    setEvennt_is_full(evennt_is_full: boolean) {
        this.evennt_is_full = evennt_is_full;
    }


    public static fromJSON(json: any): event {
        const evt = new event(
            json.event_id,
            json.event_name,
            json.event_description,
            json.event_date,
            json.event_time,
            json.event_place,
            json.event_demonstrate_start_place,
            json.event_demonstrate_end_place,
            json.event_organisation,
            json.event_image,
            json.event_video,
            json.event_duration,
            json.event_strike_fund_link,
            json.event_price,
            json.event_max_participant,
            json.event_min_participant,
            json.event_is_active,
            json.event_is_public,
            json.event_is_free,
            json.event_is_online,
            json.evennt_is_full
        );
        return evt;
    }

    public static fromJSONArray(json: any): event[] {
        const events: event[] = [];
        for (let i = 0; i < json.length; i++) {
            const evt = event.fromJSON(json[i]);
            events.push(evt);
        }
        return events;
    }


    toString(): string {
        return 'Event{event_id=' + this.event_id + ', event_name=' + this.event_name + ', event_description=' + this.event_description + ', event_date=' + this.event_date + ', event_time=' + this.event_time + ', event_place=' + this.event_place + ', event_demonstrate_start_place=' + this.event_demonstrate_start_place + ', event_demonstrate_end_place=' + this.event_demonstrate_end_place + ', event_orga_id=' + this.event_organisation + ', event_image=' + this.event_image + ', event_video_url=' + this.event_video + ', event_duration=' + this.event_duration + ', event_strike_fund_link=' + this.event_strike_fund_link + ', event_price=' + this.event_price + ', event_max_participant=' + this.event_max_participant + ', event_min_participant=' + this.event_min_participant + ', event_is_active=' + this.event_is_active + ', event_is_public=' + this.event_is_public + ', event_is_free=' + this.event_is_free + ', event_is_online=' + this.event_is_online + ', evennt_is_full=' + this.evennt_is_full + '}';
    }


    equals(other: any): boolean {
        if (this === other) {
            return true;
        }
        if (!(other instanceof event)) {
            return false;
        }
        const that = other as event;
        return this.event_id === that.event_id
            && this.event_name === that.event_name
            && this.event_description === that.event_description
            && this.event_date === that.event_date
            && this.event_time === that.event_time
            && this.event_place === that.event_place
            && this.event_demonstrate_start_place === that.event_demonstrate_start_place
            && this.event_demonstrate_end_place === that.event_demonstrate_end_place
            && this.event_organisation === that.event_organisation
            && this.event_image === that.event_image
            && this.event_video === that.event_video
            && this.event_duration === that.event_duration
            && this.event_strike_fund_link === that.event_strike_fund_link
            && this.event_price === that.event_price
            && this.event_max_participant === that.event_max_participant
            && this.event_min_participant === that.event_min_participant
            && this.event_is_active === that.event_is_active
            && this.event_is_public === that.event_is_public
            && this.event_is_free === that.event_is_free
            && this.event_is_online === that.event_is_online
            && this.evennt_is_full === that.evennt_is_full;
    }

    // generate clone methods
    clone(): event {
        return new event(
            this.event_id,
            this.event_name,
            this.event_description,
            this.event_date,
            this.event_time,
            this.event_place,
            this.event_demonstrate_start_place,
            this.event_demonstrate_end_place,
            this.event_organisation,
            this.event_image,
            this.event_video,
            this.event_duration,
            this.event_strike_fund_link,
            this.event_price,
            this.event_max_participant,
            this.event_min_participant,
            this.event_is_active,
            this.event_is_public,
            this.event_is_free,
            this.event_is_online,
            this.evennt_is_full
        );
    }

    defaultEvent(): event {
        return new event(
            0,
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            0,
            '',
            '',
            '',
            '',
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            false
        );
    }


    public hasAnImage(): boolean {
        return this.event_image !== '' || this.event_image !== null || this.event_image !== undefined;
    }


}