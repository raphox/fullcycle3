from django.http import Http404
from django.shortcuts import render

from .models import Lesson


def index(request):
    lesson_list = Lesson.objects.order_by('publicated_at')
    context = {'lesson_list': lesson_list}

    return render(request, 'lessons/index.html', context)


def detail(request, lesson_id):
    try:
        lesson = Lesson.objects.get(pk=lesson_id)
    except Lesson.DoesNotExist:
        raise Http404("Lesson does not exist")
    return render(request, 'lessons/detail.html', {'lesson': lesson})
