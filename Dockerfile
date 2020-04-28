FROM registry.redhat.io/rhscl/nodejs-12-rhel7:latest

USER 0

RUN yum -y install GraphicsMagick ghostscript

USER 1001
