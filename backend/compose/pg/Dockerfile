# syntax=docker/dockerfile:1

FROM postgres:17.3 as base

RUN localedef -i es_CO -c -f UTF-8 -A /usr/share/locale/locale.alias es_CO.UTF-8
ENV LANG es_CO.UTF-8