FROM registry.redhat.io/rhscl/nodejs-12-rhel7:1-7

USER 0

RUN yum -y install GraphicsMagick ghostscript

USER 1001
