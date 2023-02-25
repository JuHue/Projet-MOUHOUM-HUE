from django.db import models
from organisation.models import Organisation

import re


class EventManager(models.Manager):
    event_min_participant = models.IntegerField(null=True, blank=True)
    def create_event(self, event_name, event_description, event_date, event_time, event_place, event_demonstrate_start_place, event_demonstrate_end_place, event_organisation, event_image, event_video, event_duration, event_strike_fund_like, event_price, event_max_participant, event_min_participant, event_is_active, event_is_public, event_is_free, event_is_online, event_is_private, event_is_cancelled, event_is_full):
        if not event_name:
            raise ValueError('event must have a name')
        if not event_description:
            raise ValueError('event must have a description')
        if not event_date:
            raise ValueError('event must have a date')
        if not event_time:
            raise ValueError('event must have a time')
        if not event_place or (not event_demonstrate_start_place and not event_demonstrate_end_place):
            raise ValueError('event must have a place')
        if not event_organisation:
            raise ValueError('event must have an organisation')

        event = self.model(
            event_name=event_name,
            event_description=event_description,
            event_date=event_date,
            event_time=event_time,
            event_place=event_place,
            event_demonstrate_start_place=event_demonstrate_start_place,
            event_demonstrate_end_place=event_demonstrate_end_place,
            event_organisation=event_organisation,
            event_image=event_image,
            event_video=event_video,
            event_duration=event_duration,
            event_strike_fund_like=event_strike_fund_like,
            event_price=event_price,
            event_max_participant=event_max_participant,
            event_min_participant=event_min_participant,
            event_is_active=event_is_active,
            event_is_public=event_is_public,
            event_is_free=event_is_free,
            event_is_online=event_is_online,
            event_is_private=event_is_private,
            event_is_cancelled=event_is_cancelled,
            event_is_full=event_is_full
        )
        event.save(using=self._db)
        return event

    # Update an event
    def update_event(self, event_id,event_name, event_description, event_date, event_time, event_place, event_demonstrate_start_place, event_demonstrate_end_place, event_organisation, event_image, event_video, event_duration, event_strike_fund_like, event_price, event_max_participant, event_min_participant, event_is_active, event_is_public, event_is_free, event_is_online, event_is_cancelled, event_is_full):
        event=self.get(event_id=event_id)
        event.name=event_name
        event.description=event_description
        event.date=event_date
        event.time=event_time
        event.place=event_place
        event.demonstrate_start_place=event_demonstrate_start_place
        event.demonstrate_end_place=event_demonstrate_end_place
        event.organisation=event_organisation
        event.image=event_image
        event.video=event_video
        event.duration=event_duration
        event.strike_fund_like=event_strike_fund_like
        event.price=event_price
        event.max_participant=event_max_participant
        event.min_participant=event_min_participant
        event.is_active=event_is_active
        event.is_public=event_is_public
        event.is_free=event_is_free
        event.is_online=event_is_online
        event.is_cancelled=event_is_cancelled
        event.is_full=event_is_full

        event.save(using=self._db)
        return event

    def delete_event(self, event_id):
        event=self.get(event_id=event_id)
        event.delete()
        return event

    def get_all_events(self):
        return self.all()

    def get_all_active_events(self):
        return self.filter(event_is_active=True)

    def get_all_public_events(self):
        return self.filter(event_is_public=True)

    def get_all_free_events(self):
        return self.filter(event_is_free=True)

    def get_all_online_events(self):
        return self.filter(event_is_online=True)

    def get_all_private_events(self):
        return self.filter(event_is_private=True)

    def get_all_cancelled_events(self):
        return self.filter(event_is_cancelled=True)

    def get_all_full_events(self):
        return self.filter(event_is_full=True)

    def get_all_events_of_an_organisation(self, organisation_id):
        return self.filter(event_organisation=organisation_id)

    def get_all_active_events_of_an_organisation(self, organisation_id):
        return self.filter(event_organisation=organisation_id, event_is_active=True)

    def get_all_public_events_of_an_organisation(self, organisation_id):
        return self.filter(event_organisation=organisation_id, event_is_public=True)

    def get_all_free_events_of_an_organisation(self, organisation_id):
        return self.filer(event_organisation=organisation_id, event_is_free=True)

    def get_all_online_events_of_an_organisation(self, organisation_id):
        return self.filter(event_organisation=organisation_id, event_is_online=True)

    def get_all_private_events_of_an_organisation(self, organisation_id):
        return self.filter(event_organisation=organisation_id, event_is_public=False)

    def get_all_cancelled_events_of_an_organisation(self, organisation_id):
        return self.filter(event_organisation=organisation_id, event_is_cancelled=True)

    def get_all_full_events_of_an_organisation(self, organisation_id):
        return self.filter(event_organisation=organisation_id, event_is_full=True)

    def get_all_events_of_a_user(self, user_id):
        return self.filter(event_organisation__organisation_user=user_id)

    def get_event(self, event_id):
        return self.get(event_id=event_id)

    def get_event_by_name(self, event_name):
        return self.filter(event_name__regex=r''+event_name+'')


class Event(models.Model):
    event_id = models.AutoField(primary_key=True)
    event_name = models.CharField(max_length=255)
    event_description = models.TextField()
    event_date = models.DateField()
    event_time = models.TimeField()
    event_place = models.CharField(max_length=255, null=True, blank=True)
    event_demonstrate_start_place = models.CharField(max_length=255, null=True, blank=True)
    event_demonstrate_end_place = models.CharField(max_length=255, null=True, blank=True)
    event_organisation = models.ForeignKey(Organisation, on_delete=models.CASCADE, null=False)
    event_image = models.ImageField(upload_to='event_images/', null=True, blank=True)
    event_video = models.FileField(upload_to='event_videos/', null=True, blank=True)
    event_duration = models.TimeField(null=True, blank=True)
    event_strike_fund_link = models.URLField(null=True, blank=True)
    event_price = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    event_max_participant =  models.IntegerField(null=True, blank=True)
    event_min_participant = models.IntegerField(null=True, blank=True)
    event_is_active = models.BooleanField(default=True)
    event_is_public = models.BooleanField(default=True)
    event_is_free = models.BooleanField(default=True)
    event_is_online = models.BooleanField(default=True)
    event_is_cancelled = models.BooleanField(default=False)
    event_is_full = models.BooleanField(default=False)

    objects = EventManager()

    def __str__(self):
        return self.event_name