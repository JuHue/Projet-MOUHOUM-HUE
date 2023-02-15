"""back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from account.views import AccountView, AccountByUsernameView
from organisation.views import OrganisationView, Organisation_typeView
from event.views import EventView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),

    path('account/', AccountView.as_view()),
    path('account/authenticate/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('account/authenticate/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('account/get_account_by_username/', AccountByUsernameView.as_view()),
    path('organisation/', OrganisationView.as_view()),
    path('organisation_type', Organisation_typeView.as_view()),

    path('event/', EventView.as_view()),
    path('event/get_all_active_events/', EventView.as_view(), name='get_all_active_events'),
    path('event/get_all_public_events/', EventView.as_view(), name='get_all_public_events'),
    path('event/get_all_free_events/', EventView.as_view(), name='get_all_free_events'),
    path('event/get_all_onlines_events/', EventView.as_view(), name='get_all_onlines_events'),
    path('event/get_all_private_events/', EventView.as_view(), name='get_all_private_events'),
    path('event/get_all_canceled_events/', EventView.as_view(), name='get_all_canceled_events'),
    path('event/get_all_full_events/', EventView.as_view(), name='get_all_full_events'),
    path('event/get_all_events_of_an_organisation/', EventView.as_view(), name='get_all_events_of_an_organisation'),
    path('event/get_all_active_events_of_an_organisation/', EventView.as_view(), name='get_all_active_events_of_an_organisation'),
    path('event/get_all_public_events_of_an_organisation/', EventView.as_view(), name='get_all_public_events_of_an_organisation'),
    path('event/get_all_free_events_of_an_organisation/', EventView.as_view(), name='get_all_free_events_of_an_organisation'),
    path('event/get_all_online_events_of_an_organisation/', EventView.as_view(), name='get_all_online_events_of_an_organisation'),
    path('event/get_all_private_events_of_an_organisation/', EventView.as_view(), name='get_all_private_events_of_an_organisation'),
    path('event/get_all_canceled_events_of_an_organisation/', EventView.as_view(), name='get_all_canceled_events_of_an_organisation'),
    path('event/get_all_full_events_of_an_organisation/', EventView.as_view(), name='get_all_full_events_of_an_organisation'),
    path('event/get_all_events_of_an_account/', EventView.as_view(), name='get_all_events_of_an_account'),
    path('event/get_all_events_of_an_account/', EventView.as_view(), name='get_all_events_of_an_account'),
    path('event/get_event_by_id/<int:id>', EventView.as_view(), name='get_event_by_id'),
    path('event/get_event_by_name/<str:name>', EventView.as_view(), name='get_event_by_name'),
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
